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
        this._limit = 5
        makeAutoObservable(this)
    }

    setBasketDevices(basketDevices){
        this._basketDevices = basketDevices
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
}