<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ManagingShopOrders.aspx.cs" Inherits="ManagingShopOrders" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body style="background-color:linen">
    <form id="form1" runat="server">
    <div>
     <h1>Manage Shop Orders</h1>
            
            OrderID:<asp:TextBox runat="server" ID="txtId"></asp:TextBox><br />
            <br />
           
           
            <asp:Button runat="server" id="Button1" Text="SELECT" OnClick="Button1_Click"  /><br /><br />   
            <asp:Button runat="server" id="btnDelete" Text="DELETE DS" OnClick="btnDelete_Click"     /><br /><br />
            <asp:Button runat="server" id="btnUpdateDB" Text="UPDATE DB" OnClick="btnUpdateDB_Click"   /><br /><br />
            <asp:GridView ID="GridView1" runat="server">
                 </asp:GridView> 
        <br /><br /> 
        Go To: <asp:Button class="btn btn-xs btn-primary" ID="btnGoToManagingItems" runat="server" Text="Managing Shop Items " OnClick="btnGoToManagingItems_Click"  />
                            
    </div>
    </form>
</body>
</html>
