module.exports = {
    getValidationResult: () => {
        const result = {
            error: null,
            isValid: true,
            setError: function(error) {
                this.error = error;
                this.isValid = false;
                
                return this
            }
        };

        return result
    },

    isNonEmptyText: text => (typeof text === 'string' && text.length > 0),

    getErrorResponseBody: error => ({ error, data: null }),

    getSuccessResponseBody: data => ({ error: null, data }),

    getDatabaseQueryResult: () => {
        const result = {
            error: null,
            data: null,
            setData: function(data) {
                this.data = data;
                this.error = null;

                return this
            },
            setError: function(error) {
                this.data = null;
                this.error = error;
                
                return this
            }
        };

        return result
    },

    getDatabaseQueryError: (code = null, message = null) => ({ code, message })
}