using Microsoft.AspNet.Identity.EntityFramework;
using MyApp.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Repository.EntityFramework
{
    public class MyAppContext : IdentityDbContext<ApplicationUser>
    {
        public MyAppContext() : base("MyAppDBConnectionString", throwIfV1Schema: false)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<MyAppContext, MyApp.Repository.EntityFramework.Migrations.Configuration>("MyAppDBConnectionString"));
        }

        public static MyAppContext Create()
        {
            return new MyAppContext();
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Standard> Standards { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // Map the Individual User Accounts Authentication
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Standard>()
                    .Property(p => p.MaxNumberOfStudents)
                    .IsOptional();
        }
    }
}
