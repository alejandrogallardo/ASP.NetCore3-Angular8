using System;
using System.Collections.Generic;

namespace crud.Models
{
    public partial class Personas
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Correo { get; set; }
        public string Bio { get; set; }
    }
}
