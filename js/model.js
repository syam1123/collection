var Model = function(data) {
    this.uid = Date.now();
    this.init(data);
};

Model.prototype.init = function (data) {
    this.attributes = _.extend({}, data);
    this.changed = [];
    this.oldValues = {};
};

Model.prototype.get = function (key) {
    return this.attributes[key];
};

Model.prototype.set = function (key, value) {
    if ( this.attributes.hasOwnProperty(key) ) {
        this.saveOld( _.clone(this.attributes) );

        this.attributes[key] = value;

        // emmit event
        // dispatch({});
        // this.updateChanged(key, value);

        return this.attributes[key]
    } else {
        return undefined;
    };
};

Model.prototype.saveOld = function (oldValues) {
    this.oldValues = oldValues;
};

Model.prototype.updateChanged = function (key) {
    this.changed = [];
    this.changed.push(key);
};
