jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "rational-pre": function(a) {
        const split = a.split("/");
        // use jQuery selector if cell content is html
        // const split = $(a).text().split("/"); 
        
        const numerator = parseFloat(split[0]);
        const denominator = parseFloat(split[1]);
        if (numerator === 0 || denominator === 0) {
            return 0;
        }
        return numerator / denominator;
    },

    "rational-asc": function (a, b) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "rational-desc": function (a, b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
} );