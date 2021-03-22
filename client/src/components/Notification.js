import UIkit from 'uikit'

const showNotification = (message, status) =>{
    UIkit.notification({message, status})
}

export default showNotification;
