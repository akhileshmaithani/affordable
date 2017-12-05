export default class Utils {
    static calculateTriggerValue(value, opts) {

        const trigger = opts.trigger || false;

        /* Have Trigger */
        if(trigger) {
            const mod = value % trigger;
            if(mod > trigger / 2) {
                return value - mod + trigger;
            } else {
                return value - mod;
            }
        }

        return value
    }

    static getDecimalFormatter(format) {

        const hasDecimal = format.match(/\d+\.\d+/g)
        if (hasDecimal) {
            const fixed = (hasDecimal[0].split(".")[1] || "").length
            return {
                str: format.replace(hasDecimal[0], "{{number}}"),
                fixed: fixed
            }
        }

        const hasNumber = format.match(/\d+/g)
        return {
            str: format.replace(hasNumber, "{{number}}"),
            fixed: 0
        }
    }

    static formatValue(value, format) {
        const formatValue = value.toFixed(format.fixed)
        return format.str.replace("{{number}}", formatValue)
    }
}
