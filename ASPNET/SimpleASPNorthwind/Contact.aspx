<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="SimpleASPNorthwind.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%: Title %>.</h2>
    <h3>My contact</h3>
    <address>
        Burlington<br />
        Ontario<br />
        Canada<br />
        <abbr title="Phone">P:</abbr>
        905.802.1051
    </address>

    <address>
        <strong>Email:</strong>   <a href="mailto:andrenkov@gmail.com">andrenkov@gmail.com</a><br />
    </address>
</asp:Content>
