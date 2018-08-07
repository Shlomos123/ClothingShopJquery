using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class ManagingShopOrders : System.Web.UI.Page
{
    string strCon = ConfigurationManager.ConnectionStrings["RuppinDB"].ConnectionString;
    SqlConnection con;


    DataSet ds = new DataSet();
    SqlDataAdapter adptr;


    protected void Page_Load(object sender, EventArgs e)
    {
        con = new SqlConnection(strCon);
        SqlCommand com = new SqlCommand();
        com.Connection = con;
        RefreshGV();
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        RefreshGV();
    }

    private void RefreshGV()
    {
        ds.Clear();
        adptr = new SqlDataAdapter("SELECT * FROM tblOrders ", con);
        adptr.Fill(ds, "T1");
        GridView1.DataSource = ds.Tables["T1"];
        GridView1.DataBind();

    }
    private void UpdateDB()
    {
        SqlCommandBuilder builder = new SqlCommandBuilder(adptr);//!!!
        adptr.Update(ds, "T1");
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        DataTable dt = ds.Tables["T1"];

        for (int i = 0; i < dt.Rows.Count; i++)
        {
            if (dt.Rows[i]["Id"].ToString() == txtId.Text)
            {
                dt.Rows[i].Delete();
            }
        }
        UpdateDB();

    }

    protected void btnUpdateDB_Click(object sender, EventArgs e)
    {
        UpdateDB();
    }

    protected void btnGoToManagingItems_Click(object sender, EventArgs e)
    {
        Server.Transfer("ManagingShopItems.aspx");
    }
}