exports.generateCrudMethods = Model=>{
    return {
        geyAll: ()=> Model.find(),
        getById:id=> Model.findById(id),
        create: record => Model.create(record),
        update:(id,record)=> Model.findByIdAndUpdate(id,record,{new:true}),
        delete: id=>Model.findByIdAndDelete(id)
    }
}