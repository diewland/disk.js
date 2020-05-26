let Disk = {

  get: (key, default_value = null) => {
    let val = localStorage.getItem(key);
    if (!val) return default_value;
    return JSON.parse(val);
  },

  set: (key, value) => {
    let json_str = JSON.stringify(value);
    localStorage.setItem(key, json_str);
    return value;
  }

};
