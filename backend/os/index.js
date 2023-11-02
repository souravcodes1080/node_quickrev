const print = require("../basics/printer")

const os = require("os")


//os----------------------------
print(os.arch())
print(os.type())
print(os.cpus()[0].model)
print(os.userInfo().username)
print(os.machine())