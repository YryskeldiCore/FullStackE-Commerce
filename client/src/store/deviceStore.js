import { makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor(){
        this._types = []
        this._brands = []
        this._devices = []
        this._setSelectedType = {}
        this._setSelectedBrand = {}
        this._basketDevices = []
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        this._sum = 0
        makeAutoObservable(this)
    }

    setBasketDevices(basketId){
        const itemInd = this._basketDevices.findIndex(device => device.id === basketId)

        if(itemInd >= 0){
            const itemInStore = this._basketDevices.find(device => device.id === basketId)
            const newItem = {
                ...itemInStore,
                quantity: ++itemInStore.quantity
            }

            this._basketDevices = [
                ...this._basketDevices.slice(0, itemInd),
                newItem,
                ...this._basketDevices.slice(itemInd + 1)
            ]
            this._sum = this._sum + itemInStore.price
        }

        //Товара не было в корзине

        const item = this._devices.find(device => device.id === basketId)

        const newItem = { 
            ...item,
            quantity: 1
        }

        if(this._basketDevices.find(item => item.id === basketId)){ 
            this._basketDevices = [...this._basketDevices]
        } else {
            this._basketDevices = [...this._basketDevices, newItem]
            this._sum = this._sum + item.price
        }
    }

    removeBasketDevices(id){
        const idx = this._basketDevices.findIndex(item => item.id === id)
        const price = this._basketDevices[idx]['price'] * this._basketDevices[idx]['quantity']
        this._basketDevices = [...this._basketDevices.slice(0, idx), ...this._basketDevices.slice(idx + 1)]
        this._sum = this._sum - price
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this.setPage(1)
        this._setSelectedType = type
    }

    setSelectedBrand(brand){
        this.setPage(1)
        this._setSelectedBrand = brand
    }

    setPage(page){
        this._page = page
    }

    setTotalCount(total){
        this._totalCount = total
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._setSelectedType
    }

    get selectedBrand(){
        return this._setSelectedBrand
    }
    
    get page(){
        return this._page
    }

    get totalCount(){
        return this._totalCount
    }

    get limit(){
        return this._limit
    }

    get basketDevices(){
        return this._basketDevices
    }

    get sum(){
        return this._sum
    }
}