using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class ManagingItems : System.Web.UI.Page
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

    protected void btnInsert_Click(object sender, EventArgs e)
    {
        if (ddlGender.SelectedValue=="MEN")
        {
            con = new SqlConnection(strCon);
            SqlCommand com = new SqlCommand();
            com.Connection = con;
            com.CommandText = "INSERT INTO tblMENItems(Name,Section,Price, Discount,ImagePath) VALUES(@NamePrm,@SectionPar,@PricePar,@DiscountPrm,@ImagePathPar)";

            SqlParameter nameParameter = new SqlParameter("@NamePrm", txtName.Text);
            com.Parameters.Add(nameParameter);
            com.Parameters.Add(new SqlParameter("@SectionPar", ddlSection.SelectedValue));
            com.Parameters.Add(new SqlParameter("@PricePar", txtPrice.Text));
            com.Parameters.Add(new SqlParameter("@DiscountPrm", txtDiscount.Text));
            com.Parameters.Add(new SqlParameter("@ImagePathPar", FileUpload1.PostedFile.FileName));

           
            con.Open();
            int res = com.ExecuteNonQuery();
            com.Connection.Close();
            Response.Write(res);
        }
        else 
        {
            con = new SqlConnection(strCon);
            SqlCommand com = new SqlCommand();
            com.Connection = con;
            com.CommandText = "INSERT INTO tblWOMENItems(Name,Section,Price, Discount,ImagePath) VALUES(@NamePrm,@SectionPar,@PricePar,@DiscountPrm,@ImagePathPar)";

            SqlParameter nameParameter = new SqlParameter("@NamePrm", txtName.Text);
            com.Parameters.Add(nameParameter);
            com.Parameters.Add(new SqlParameter("@SectionPar", ddlSection.SelectedValue));
            com.Parameters.Add(new SqlParameter("@PricePar", txtPrice.Text));
            com.Parameters.Add(new SqlParameter("@DiscountPrm", txtDiscount.Text));
            com.Parameters.Add(new SqlParameter("@ImagePathPar", FileUpload1.PostedFile.FileName));

            con.Open();
            int res = com.ExecuteNonQuery();
            com.Connection.Close();
            Response.Write(res);
        }
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        RefreshGV();
    }

    private void RefreshGV()
    {
        ds.Clear();
        if (ddlGender.SelectedValue == "MEN")
        {
            adptr = new SqlDataAdapter("SELECT * FROM tblMENItems ORDER BY Price", con);
            adptr.Fill(ds, "T1");
            GridView1.DataSource = ds.Tables["T1"];
            GridView1.DataBind();  
        }
        else
        {
            adptr = new SqlDataAdapter("SELECT * FROM tblWOMENItems ORDER BY Price", con);
            adptr.Fill(ds, "T1");
            GridView1.DataSource = ds.Tables["T1"];
            GridView1.DataBind();
        }
    }

    protected void btnInsertDS_Click(object sender, EventArgs e)
    {
        DataRow dr = ds.Tables[0].NewRow();
        dr["Name"] = txtName.Text;
        dr["Section"] = ddlSection.SelectedValue;
        dr["Price"] = txtPrice.Text;
        if (txtDiscount.Text == "" || int.Parse(txtDiscount.Text) == 0 || int.Parse(txtDiscount.Text) > 100 || int.Parse(txtDiscount.Text) < 0)
            dr["Discount"] = DBNull.Value;
        else
            dr["Discount"] = int.Parse(txtDiscount.Text);
        dr["ImagePath"] = FileUpload1.PostedFile.FileName;
        dr["Id"] = 66;


        ds.Tables["T1"].Rows.Add(dr);

        //SqlDataAdapter adptr = new SqlDataAdapter("SELECT * FROM tblUsers ORDER BY Family", con);
        UpdateDB();
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

    protected void btnUpdate_Click(object sender, EventArgs e)
    {

        DataTable dt = ds.Tables["T1"];
        foreach (DataRow row in dt.Rows)
        {
            if (row["Id"].ToString() == txtId.Text) 
            {
                row["Name"] = txtName.Text;
                row["Section"] = ddlSection.SelectedValue;
                row["Price"] = txtPrice.Text;     
                if (txtDiscount.Text == "" || int.Parse(txtDiscount.Text) == 0 || int.Parse(txtDiscount.Text) >100 || int.Parse(txtDiscount.Text)<0)
                    row["Discount"] = DBNull.Value;
                else
                    row["Discount"] = int.Parse(txtDiscount.Text);     
                row["ImagePath"] = FileUpload1.PostedFile.FileName;
            }
        }
        UpdateDB();
    }

    protected void btnUpdateDB_Click(object sender, EventArgs e)
    {
        UpdateDB();
    }


    protected void btnGoToManagingOrders_Click(object sender, EventArgs e)
    {
        Server.Transfer("ManagingShopOrders.aspx");
    }
}