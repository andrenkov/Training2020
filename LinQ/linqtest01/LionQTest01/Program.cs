using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Data.Linq.Mapping;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ObjectDumper;
using System.Data;
using System.Transactions;

namespace LionQTest01
{
    /*
[Table(Name = "Customer")]
class Customer
{
[Column(IsPrimaryKey = true)]
public string CustomerID { get; set; }
[Column]
public string Contact { get; set; }
[Column]
public string City { get; set; }
[Column]
public string Phone { get; set; }
class Taximan : DataContext {
    public Table<Customer> Customers;
    public Taximan(string s) : base(s) { }
}
class Driver
{
    static void Main(string[] args)
    {
        Taximan db = new Taximan("Server=WS2012;Database=Taximan;User ID=sa;Password=dame;Trusted_Connection=False");
        db.Log = Console.Out;
        var query = from c in db.Customers
                        where c.City == "Milton"
                    orderby c.Contact descending
                    //group c by c.City into g
                    //select new { City = g.Key, Count = g.Count()};
                    select c;

        foreach (Customer c in query)
            Console.WriteLine(c.City + "--" + c.Contact + "--" + c.Phone);
        //ObjectDumper.Dumper.Dump(query);

        Console.WriteLine("Press any key to stop...");
        Console.ReadKey();
    }
}
}
*/

    class Driver
    {
            static void Main(string[] args)
            {
            using (TransactionScope tx = new TransactionScope())
            {
                var db = new TaxiManDBDataContext();
                db.Log = Console.Out;
                var query = from c in db.Customers
                            where //c.IsWebAccount == 'T' &&
                                c.CustUsers.Count > 5
                            select c;

                foreach (Customer c in query)
                {
                    Console.WriteLine(c.CustomerID + "--" + c.Company + " count = " + c.CustUsers.Count);
                }


                //using (var writer = new System.IO.StringWriter())
                //{
                //    Dumper.Dump(query, "Object Dumper", writer);
                //    Console.Write(writer.ToString());
                //};

                //db.SubmitChanges(); // call it after the in memory object is modified
                //can new transaction --> commit;
                //stored proc added to the CustUser oblect 
                //var sp = db.SaveCustUser(ref 0, 1, .);

                Console.WriteLine("Press any key to stop...");
                Console.ReadKey();

                tx.Complete();
            }
        }
    }
}

