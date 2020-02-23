export default (arr, user) => {
    const {firstName, lastName} = user;
    if (arr[arr.length - 1] === user) {
        return `${firstName} ${lastName}`
    }
    else {
        return `${firstName} ${lastName},`
    }
};