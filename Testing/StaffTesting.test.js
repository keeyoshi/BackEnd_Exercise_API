const Staff =require('../models/staff');
const mongoose=require('mongoose');

const url='mongodb://localhost:27017/te';
beforeAll(async()=>{
    await mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true
        });
});

afterAll(async()=>{
    await mongoose.connection.close();
});
describe('staff schema test',()=>{
    it('staff registration testing', ()=>{
        const staff={
            'firstName':'keeyoshi',
            'lastName':'pyakurel',
            'email':'keeyoshi@gmail.com',
            'password':'12345678'
        };

        return Staff.create(staff)
            .then((pro_ret) => {
                expect(pro_ret.email).toEqual('keeyoshi@gmail.com');
            });
    });
})