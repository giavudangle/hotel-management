import mongoose from 'mongoose';

const StaffSchema = new mongoose.Schema({
    staff_name:{
        type:String,
        required:[true,'Vui lòng nhập tên nhân viên'],
        validate:{
            validator:function(name) {
                return name.length > 5
            },
            message:"Họ và tên nhân viên phải lớn hơn 5 ký tự"
        }
    },
    staff_gender:{
        type:Boolean,
    },
    staff_dateOfBirth:{
        type:Date,
        required:[true,"Vui lòng nhập tuổi nhân viên"],
        validate:{
            validator:function(date){
                const currentYear = new Date().getFullYear();
                const staffYear = date.getFullYear();
                return currentYear - staffYear >= 18;
            },
            message:"Tuổi của nhân viên phải lớn hơn hoặc đủ 18 "
        }
    },
    staff_phone:{
        type:String,
    },
    staff_person_id:{
        type:String
    },
    staff_address:{
        type:String
    }

})

module.exports = mongoose.model('Staff',StaffSchema);