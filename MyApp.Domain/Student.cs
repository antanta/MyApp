using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Domain
{
    public class Student
    {
        public Student() { }

        [Key]
        public int StudentId { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }

        public int? Age { get; set; }

        public int StandardId { get; set; }

        public string StudentQuestion { get; set; }

        [ForeignKey("StandardId")]
        public virtual Standard Standard { get; set; }

        //public ICollection<Course> Courses { get; set; }
    }

}
