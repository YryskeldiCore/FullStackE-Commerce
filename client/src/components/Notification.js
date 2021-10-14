import UIkit from 'uikit'

const showNotification = (message, status) =>{
    UIkit.notification({message, status, timeout: 800})
}

export default showNotification;
