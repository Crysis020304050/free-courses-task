export default (arr, user, index) => {
    const {firstName, lastName} = user;
    if (arr.length === index) {
        return `${firstName} ${lastName}`
    }
    else {
        return `${firstName} ${lastName},`
    }
};