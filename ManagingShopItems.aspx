<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ManagingShopItems.aspx.cs" Inherits="ManagingItems" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Clothes R Us Admin</title>
</head>
<body style="background-color:linen">
    <form id="form1" runat="server">
    <div>
        <h1>Manage Shop Items</h1>
            SelectGender:<asp:DropDownList runat="server" ID="ddlGender" AutoPostBack="true" 
            style="margin-bottom: 0px">
                <asp:ListItem Text="MEN" Value="MEN" Selected="false"></asp:ListItem>
                <asp:ListItem Text="WOMEN" Value="WOMEN" Selected="false"></asp:ListItem>
                         </asp:DropDownList><br />

            <br />
            ItemID:<asp:TextBox runat="server" ID="txtId"></asp:TextBox><br />
            <br />
            Section:<asp:DropDownList runat="server" ID="ddlSection" AutoPostBack="true" 
            style="margin-bottom: 0px">
                <asp:ListItem Text="NEW" Value="NEW" Selected="false"></asp:ListItem>
                <asp:ListItem Text="HOT" Value="HOT" Selected="false"></asp:ListItem>
                         </asp:DropDownList><br />
            ItemName:<asp:TextBox runat="server" ID="txtName"></asp:TextBox><br />
            <br />
            Price:<asp:TextBox runat="server" ID="txtPrice" ></asp:TextBox><br />
            <br />
            Discount(Optional):<asp:TextBox runat="server" ID="txtDiscount"></asp:TextBox><br />
            <br />
            ImagePath:<asp:FileUpload ID="FileUpload1" runat="server" /><br /><br />
            <asp:Button runat="server" id="btnInsert" Text="INSERT DB" OnClick="btnInsert_Click" /><br /><br />
            <asp:Button runat="server" id="Button1" Text="SELECT" OnClick="Button1_Click" /><br /><br />
            <asp:Button runat="server" id="btnInsertDS" Text="INSERT DS" OnClick="btnInsertDS_Click"  /><br /><br />
            <asp:Button runat="server" id="btnDelete" Text="DELETE DS" OnClick="btnDelete_Click"    /><br /><br />
            <asp:Button runat="server" id="btnUpdate" Text="UPDATE DS" OnClick="btnUpdate_Click"  /><br /><br />
            <asp:Button runat="server" id="btnUpdateDB" Text="UPDATE DB" OnClick="btnUpdateDB_Click"  /><br /><br />
            <asp:GridView ID="GridView1" runat="server">
                 </asp:GridView>   
        <br /><br /> 
         Go To: <asp:Button class="btn btn-xs btn-primary" ID="btnGoToManagingOrders" runat="server" Text="Managing Shop Orders" OnClick="btnGoToManagingOrders_Click"  /> 
    </div>
    </form>
</body>
</html>
