import {$host, $authHost} from './index'
import showNotification from '../components/Notification'

export const createType = async (type) => {
    const {data} = await
    $authHost.post('api/type', type)
        .then((res) => {
            showNotification("Успешно добавлено", 'success')
            return {res}
        })
        .catch(() => {
            showNotification("Произошла ошибка", 'danger')
        })

    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await 
    $authHost.post('api/brand', brand)
        .then((res) => {
            showNotification("Успешно добавлено", 'success')
            return {res}
        })
        .catch(() => {
            showNotification("Произошла ошибка", 'danger')
        })
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await 
    $authHost.post('api/device', device)
        .then((res) => {
            showNotification("Успешно добавлено", 'success')
            return {res}
        })
        .catch(() => {
            showNotification("Произошла ошибка", 'danger')
        })
    return data
} 

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, page, limit
    }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

// export const createBasketDevice = async (id) => {
//     const {data} = await
//     $host.post('api/basket_device', {id})
//         .then((res) => {
//             showNotification("Успешно добавлено", 'success')
//             return {res}
//         })
//         .catch(() => {
//             showNotification("Произошла ошибка", 'danger')
//         })
//     return data
// }

// export const fetchBasketDevices = async () => {
//     const {data} = await $host.get('api/basket')
//     return data
// }
