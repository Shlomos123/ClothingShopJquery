using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Xml;


/// <summary>
/// Summary description for CRSWS
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class CRSWS : System.Web.Services.WebService
{
    
    bool local = false;
    string strCon;


    public CRSWS()
    {
        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
        if (local)
        {
            strCon = ConfigurationManager.ConnectionStrings["localDB"].ConnectionString;
        }
        else
        {
            strCon = ConfigurationManager.ConnectionStrings["RuppinDB"].ConnectionString;
        }
    }


    

    [WebMethod]
    public string GetWomensNewItemsJSON()
    {
        SqlConnection con = new SqlConnection(strCon);
        DataSet ds = new DataSet();
        SqlDataAdapter adptr = new SqlDataAdapter(" SELECT * FROM tblWOMENItems WHERE Section='New' ", con);
        adptr.Fill(ds, "T1");
        DataTable dt = ds.Tables["T1"];

        return DataTableToJsonObj(dt);
    }

    [WebMethod]
    public string GetMensNewItemsJSON()
    {
        SqlConnection con = new SqlConnection(strCon);
        DataSet ds = new DataSet();
        SqlDataAdapter adptr = new SqlDataAdapter("SELECT * FROM tblMENItems WHERE Section='New'", con);
        adptr.Fill(ds, "T1");
        DataTable dt = ds.Tables["T1"];

        return DataTableToJsonObj(dt);
    }

    [WebMethod]
    public string GetWomensHotItemsJSON()
    {
        SqlConnection con = new SqlConnection(strCon);
        DataSet ds = new DataSet();
        SqlDataAdapter adptr = new SqlDataAdapter("SELECT * FROM tblWOMENItems WHERE Section='Hot'", con);
        adptr.Fill(ds, "T1");
        DataTable dt = ds.Tables["T1"];

        return DataTableToJsonObj(dt);
    }

    [WebMethod]
    public string GetMensHotItemsJSON()
    {
        SqlConnection con = new SqlConnection(strCon);
        DataSet ds = new DataSet();
        SqlDataAdapter adptr = new SqlDataAdapter("SELECT * FROM tblMENItems WHERE Section='Hot'", con);
        adptr.Fill(ds, "T1");
        DataTable dt = ds.Tables["T1"];

        return DataTableToJsonObj(dt);
    }

    [WebMethod]
    public string GetShopsJSON()
    {
        SqlConnection con = new SqlConnection(strCon);
        DataSet ds = new DataSet();
        SqlDataAdapter adptr = new SqlDataAdapter("SELECT * FROM tblShops", con);
        adptr.Fill(ds, "T2");
        DataTable dt = ds.Tables["T2"];

        return DataTableToJsonObj(dt);
    }

    [WebMethod]
    public string GetShopJSON(int Id)
    {
        SqlConnection con = new SqlConnection(strCon);
        DataSet ds = new DataSet();
        SqlDataAdapter adptr = new SqlDataAdapter("SELECT * FROM tblShops WHERE Id = '" + Id + "'", con);
        adptr.Fill(ds, "T3");
        DataTable dt = ds.Tables["T3"];

        return DataTableToJsonObj(dt);
    }

    [WebMethod]
    public int InsertOrder(string FirstName, string LastName, string Phone, string Street, string City, string Zip, string Email, string CreditCardType, string CreditCardNumber, string ItemsOrdered, string PriceToPay)
    {
            SqlConnection con = new SqlConnection(strCon);
       
            SqlCommand com = new SqlCommand();
            com.Connection = con;
            com.CommandText = "INSERT INTO tblOrders(FirstName,LastName,Phone,Street,City,Zip,Email,CreditCardType,CreditCardNumber,ItemsOrdered,PriceToPay) VALUES(@Fname,@Lname,@Phone,@Street,@City,@Zip,@Email,@CreditCardType,@CreditCardNumber,@ItemsOrdered,@PriceToPay)";

            com.Parameters.Add(new SqlParameter("@Fname", FirstName));
            com.Parameters.Add(new SqlParameter("@Lname", LastName));
            com.Parameters.Add(new SqlParameter("@Phone", Phone));
            com.Parameters.Add(new SqlParameter("@Street", Street));
            com.Parameters.Add(new SqlParameter("@City", City));
            com.Parameters.Add(new SqlParameter("@Zip", Zip));
            com.Parameters.Add(new SqlParameter("@Email", Email));
            com.Parameters.Add(new SqlParameter("@CreditCardType", CreditCardType));
            com.Parameters.Add(new SqlParameter("@CreditCardNumber", CreditCardNumber));
            com.Parameters.Add(new SqlParameter("@ItemsOrdered", ItemsOrdered));
            com.Parameters.Add(new SqlParameter("@PriceToPay", PriceToPay));


            con.Open();
            int res = com.ExecuteNonQuery();
            com.Connection.Close();
            con.Close();
            return res;
            
        
    }

    public string DataTableToJsonObj(DataTable dt)
    {
        DataSet ds = new DataSet();
        ds.Merge(dt);
        StringBuilder JsonString = new StringBuilder();
        if (ds != null && ds.Tables[0].Rows.Count > 0)
        {
            JsonString.Append("[");
            for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            {
                JsonString.Append("{");
                for (int j = 0; j < ds.Tables[0].Columns.Count; j++)
                {
                    if (j < ds.Tables[0].Columns.Count - 1)
                    {
                        JsonString.Append("\"" + ds.Tables[0].Columns[j].ColumnName.ToString() + "\":" + "\"" + ds.Tables[0].Rows[i][j].ToString() + "\",");
                    }
                    else if (j == ds.Tables[0].Columns.Count - 1)
                    {
                        JsonString.Append("\"" + ds.Tables[0].Columns[j].ColumnName.ToString() + "\":" + "\"" + ds.Tables[0].Rows[i][j].ToString() + "\"");
                    }
                }
                if (i == ds.Tables[0].Rows.Count - 1)
                {
                    JsonString.Append("}");
                }
                else
                {
                    JsonString.Append("},");
                }
            }
            JsonString.Append("]");
            return JsonString.ToString();
        }
        else
        {
            return null;
        }
    }
}

class Order
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Phone { get; set; }
    public string Street { get; set; }
    public string City { get; set; }
    public string Zip { get; set; }
    public string Email { get; set; }
    public string CreditCardType { get; set; }
    public string CreditCardNumber { get; set; }
    public string ItemsOrdered { get; set; }
    public double PriceToPay { get; set; }

    public Order(string f,string l,string p,string s,string c,string z,string e,string cct,string ccn,string io,double ptp)
    {
        FirstName = f; LastName = l; Phone = p; Street = s; City = c; Zip = z; Email = e; CreditCardType = cct; CreditCardNumber = ccn; ItemsOrdered = io; PriceToPay = ptp;
    }
   
}


