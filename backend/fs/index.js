const print = require("../basics/printer")
const fs = require("fs")


// read-----------------------------------
// async
fs.readFile("./test.txt","ascii", (err,data)=>{
    
    print(data)

    if(err){
        print(err)
        return
    }
    
})

// sync
const data = fs.readFileSync("./test.txt", "ascii")
print(data)

// write------------------------------------

// async
fs.writeFile("./test3.txt","This is async.",(err)=>{
    print("Data Inserted sucessfully")
    if(err){
        print(err)
    }
})


// sync
fs.writeFileSync("./test2.txt", "Hello this is from JS..")

