var app = new Vue ({
    el: '#frmDocsPerdidos',
    data: {
        text: ''
    },
    methods: {
        addToCount: function () {
            var exRut = "^([0-9]){7,8}[-|‐]{1}[0-9kK]{1}$"
            var cliRut = this.text.trim()
            
            //var ret = false 
            // ret == true ? (alert("Mensaje Enviado")) : (alert("Formato Invalido")) ;
            /*
            if(this.input != "" )            
                alert("Mensaje Enviado")
            else{
                alert("Debes llenar el campo")
                return
            }      
            */

            if(cliRut == ""){
                alert("Debe ingresar su rut")
                return false
            }

           cliRut.match(exRut) ? (alert("Mensaje Enviado")) : (alert("Formato invalido \n Ej: 12345678-9")) ;
        }
    }
})