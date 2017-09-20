using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyApp.Domain
{
    public class Standard
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100), Required]
        public string Name { get; set; }
        
        public IList<Student> Students { get; set; }

        //public int ClassTeacherId { get; set; }

        //[ForeignKey("ClassTeacherId")]
        //public Teacher ClassTeacher { get; set; }
    }
}
