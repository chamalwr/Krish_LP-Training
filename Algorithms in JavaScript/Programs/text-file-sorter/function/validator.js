module.exports = class Validator {
    setSeparator(sep, customerSep){
        if (sep !== undefined){
            switch (sep.toLowerCase()) {
                case "cm":
                    return ","
                case "fl":
                    return "."
                case "ot":
                    return customerSep.toString().charAt(0)
                default:
                    return "nl"
            }
        }
    }
    getSeparator(sep){
        if (sep.toString().toLowerCase() === "nl"){
            return "\n"
        }
        return sep
    }
}


