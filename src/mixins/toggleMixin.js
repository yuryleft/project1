export default{
    props:{
        show:{
            type:Boolean,
            default:false
        },
        modelValue:{
            type:String
        },
        options:{
            type:Array,
            default : () => []
        }

    },
    methods:{
        hideDialoge(){
            this.$emit('update:show',false)
        },
        changeOptions(event){
            this.$emit("update:modelValue", event.target.value);
        }
    },
    
}