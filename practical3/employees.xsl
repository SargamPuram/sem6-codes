<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<title>Employee List</title>
<style>
table { width: 80%; border-collapse: collapse; }
th, td { border: 1px solid black; padding: 10px; text-align: left; } th { background-color: #f2f2f2; }
</style>
</head>
<body>
<h2>Employee List</h2>
<table>
<tr>
<th>Employee ID</th>
<th>Name</th>
<th>Department</th>
<th>Designation</th>
<th>Salary</th>
<th>Email</th>
</tr>
<xsl:for-each select="Employees/Employee">
<tr>
<td><xsl:value-of select="EmployeeID"/></td>
<td><xsl:value-of select="Name"/></td>
<td><xsl:value-of select="Department"/></td>
<td><xsl:value-of select="Designation"/></td>
<td><xsl:value-of select="Salary"/></td>
<td><xsl:value-of select="Email"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>