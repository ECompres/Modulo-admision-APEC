﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace webAPI.Migrations
{
    public partial class k3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SecondName",
                table: "Student",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "SecondLastName",
                table: "Student",
                nullable: true,
                oldClrType: typeof(string));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SecondName",
                table: "Student",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "SecondLastName",
                table: "Student",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
