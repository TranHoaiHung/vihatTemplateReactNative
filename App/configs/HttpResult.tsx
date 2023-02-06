const HttpResult = {
    SUCCESS: 0,
    ERROR:  -1 || -2 || -3 || -4 || -5 || -6 || -7 || -100,
}

const Error = {
    WAITING_FOR_RESPONSE: 'WAITING_FOR_RESPONSE',
    DATA_INVALID: 'DATA_INVALID',
    NOT_VALIDATE: 'NOT_VALIDATE',
    ERROR: 'ERROR',
    IMAGE_INVALID: 'IMAGE_INVALID',
    NOT_EXISTED: 'NOT_EXISTED',
    ITEMS_RELATED_EXISTED: 'ITEMS_RELATED_EXISTED',
    EXISTED: 'EXISTED',
    EXCEPTION: 'EXCEPTION'
}

const MessageRequest = {
    Success: 'Success',
}


export { HttpResult as default, Error, MessageRequest };
