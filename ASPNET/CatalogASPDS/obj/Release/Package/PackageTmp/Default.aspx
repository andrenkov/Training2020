<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CatalogASPDS._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="jumbotron">
        <h1>Demo ASP.NET SqlDataSource</h1>
<p class="lead">This ASP.NET demo is using SqlDataSource to View, Edit or Delete catalog items.</p>
        
    </div>

    <div class="row">
        <div class="col-md-4">
            <h2>Catalog list:</h2>
            <p>
                <asp:GridView ID="GridView1" runat="server" AllowPaging="True" AllowSorting="True" DataSourceID="SqlDataSource1" Width="768px" AutoGenerateColumns="False" DataKeyNames="ItemID" CellPadding="4" ForeColor="#333333" GridLines="None">
                    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                    <Columns>
                        <asp:CommandField ButtonType="Button" ShowSelectButton="True"/>
                        <asp:BoundField DataField="ItemID" Visible="false" HeaderText="ItemID" InsertVisible="False" ReadOnly="True" SortExpression="ItemID" />
                        <asp:BoundField DataField="ItemName" HeaderText="Name" SortExpression="ItemName" />
                        <asp:BoundField DataField="ItemGenus" HeaderText="Genus" SortExpression="ItemGenus" />
                        <asp:BoundField DataField="ItemSpecies" HeaderText="Species" SortExpression="ItemSpecies" />
                        <asp:BoundField DataField="ItemCatalogNum" HeaderText="Catalog #" SortExpression="ItemCatalogNum" />
                    </Columns>
                    <EditRowStyle BackColor="#999999" />
                    <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                    <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                    <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                    <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                    <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
                    <SortedAscendingCellStyle BackColor="#E9E7E2" />
                    <SortedAscendingHeaderStyle BackColor="#506C8C" />
                    <SortedDescendingCellStyle BackColor="#FFFDF8" />
                    <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
                </asp:GridView>
            </p>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <h2>Details:</h2>
            <p>
                <asp:DetailsView ID="DetailsView1" runat="server" DataSourceID="SqlDataSource2" 
                    Height="50px" Width="378px" CellPadding="4" ForeColor="#333333" GridLines="None">
                    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                    <CommandRowStyle BackColor="#E2DED6" Font-Bold="True" />
                    <EditRowStyle BackColor="#999999" />
                    <FieldHeaderStyle BackColor="#E9ECF1" Font-Bold="True" />
                    <Fields>
                        <asp:CommandField ButtonType="Button" ShowDeleteButton="True" ShowEditButton="True" ShowInsertButton="True" />
                    </Fields>
                    <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                    <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                    <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                    <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                </asp:DetailsView>

            </p>
        </div>
    </div>
    <p>
        <a class="btn btn-default" href="https://andrenkov.com/projects.html">Back to projects &raquo;</a>
    </p>

    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:cCatalogStagingConnectionString %>" 
        SelectCommand="SELECT [ItemID], [ItemName], [ItemGenus], [ItemSpecies], [ItemCatalogNum] FROM [Item] ORDER BY [ItemName]" DeleteCommand="DELETE FROM [Item] WHERE [ItemID] = @ItemID" InsertCommand="INSERT INTO [Item] ([ItemName], [ItemGenus], [ItemSpecies], [ItemCatalogNum]) VALUES (@ItemName, @ItemGenus, @ItemSpecies, @ItemCatalogNum)" UpdateCommand="UPDATE [Item] SET [ItemName] = @ItemName, [ItemGenus] = @ItemGenus, [ItemSpecies] = @ItemSpecies, [ItemCatalogNum] = @ItemCatalogNum WHERE [ItemID] = @ItemID">
        <DeleteParameters>
            <asp:Parameter Name="ItemID" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="ItemName" Type="String" />
            <asp:Parameter Name="ItemGenus" Type="String" />
            <asp:Parameter Name="ItemSpecies" Type="String" />
            <asp:Parameter Name="ItemCatalogNum" Type="String" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="ItemName" Type="String" />
            <asp:Parameter Name="ItemGenus" Type="String" />
            <asp:Parameter Name="ItemSpecies" Type="String" />
            <asp:Parameter Name="ItemCatalogNum" Type="String" />
            <asp:Parameter Name="ItemID" Type="Int32" />
        </UpdateParameters>
</asp:SqlDataSource>

    <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:cCatalogStagingConnectionString %>" DeleteCommand="DELETE FROM [Item] WHERE [ItemID] = @ItemID" InsertCommand="INSERT INTO [Item] ([ItemName], [ItemGenus], [ItemSpecies], [ItemCatalogNum]) VALUES (@ItemName, @ItemGenus, @ItemSpecies, @ItemCatalogNum)" SelectCommand="SELECT [ItemID], [ItemName], [ItemGenus], [ItemSpecies], [ItemCatalogNum] FROM [Item] WHERE ([ItemID] = @ItemID)" UpdateCommand="UPDATE [Item] SET [ItemName] = @ItemName, [ItemGenus] = @ItemGenus, [ItemSpecies] = @ItemSpecies, [ItemCatalogNum] = @ItemCatalogNum WHERE [ItemID] = @ItemID">
        <DeleteParameters>
            <asp:Parameter Name="ItemID" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="ItemName" Type="String" />
            <asp:Parameter Name="ItemGenus" Type="String" />
            <asp:Parameter Name="ItemSpecies" Type="String" />
            <asp:Parameter Name="ItemCatalogNum" Type="String" />
        </InsertParameters>
        <SelectParameters>
            <asp:ControlParameter ControlID="GridView1" Name="ItemID" PropertyName="SelectedValue" Type="Int32" />
        </SelectParameters>
        <UpdateParameters>
            <asp:Parameter Name="ItemName" Type="String" />
            <asp:Parameter Name="ItemGenus" Type="String" />
            <asp:Parameter Name="ItemSpecies" Type="String" />
            <asp:Parameter Name="ItemCatalogNum" Type="String" />
            <asp:Parameter Name="ItemID" Type="Int32" />
        </UpdateParameters>
    </asp:SqlDataSource>

</asp:Content>
