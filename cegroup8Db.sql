USE [master]
GO
/****** Object:  Database [cegroup8Db]    Script Date: 25/08/2017 15:38:35 ******/
CREATE DATABASE [cegroup8Db] ON  PRIMARY 
( NAME = N'cegroup8Db', FILENAME = N'd:\DATA\cegroup8Db.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'cegroup8Db_log', FILENAME = N'd:\LOGS\cegroup8Db_log.ldf' , SIZE = 6144KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [cegroup8Db] SET COMPATIBILITY_LEVEL = 90
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [cegroup8Db].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [cegroup8Db] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [cegroup8Db] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [cegroup8Db] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [cegroup8Db] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [cegroup8Db] SET ARITHABORT OFF 
GO
ALTER DATABASE [cegroup8Db] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [cegroup8Db] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [cegroup8Db] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [cegroup8Db] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [cegroup8Db] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [cegroup8Db] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [cegroup8Db] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [cegroup8Db] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [cegroup8Db] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [cegroup8Db] SET  DISABLE_BROKER 
GO
ALTER DATABASE [cegroup8Db] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [cegroup8Db] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [cegroup8Db] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [cegroup8Db] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [cegroup8Db] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [cegroup8Db] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [cegroup8Db] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [cegroup8Db] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [cegroup8Db] SET  MULTI_USER 
GO
ALTER DATABASE [cegroup8Db] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [cegroup8Db] SET DB_CHAINING OFF 
GO
EXEC sys.sp_db_vardecimal_storage_format N'cegroup8Db', N'ON'
GO
USE [cegroup8Db]
GO
/****** Object:  User [cegroup8]    Script Date: 25/08/2017 15:38:35 ******/
CREATE USER [cegroup8] FOR LOGIN [cegroup8] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [cegroup8]
GO
/****** Object:  Table [dbo].[tblMENItems]    Script Date: 25/08/2017 15:38:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblMENItems](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Section] [nvarchar](10) NOT NULL,
	[Price] [float] NOT NULL,
	[Discount] [smallint] NULL,
	[ImagePath] [nvarchar](200) NOT NULL,
 CONSTRAINT [PK_tblMENItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblOrders]    Script Date: 25/08/2017 15:38:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tblOrders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](20) NULL,
	[LastName] [nvarchar](20) NULL,
	[Phone] [char](10) NULL,
	[Street] [varchar](20) NULL,
	[City] [varchar](20) NULL,
	[Zip] [varchar](30) NULL,
	[Email] [nvarchar](50) NULL,
	[CreditCardType] [nvarchar](20) NULL,
	[CreditCardNumber] [char](16) NULL,
	[ItemsOrdered] [nvarchar](500) NULL,
	[PriceToPay] [nvarchar](50) NULL,
 CONSTRAINT [PK_tblOrders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tblShops]    Script Date: 25/08/2017 15:38:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblShops](
	[Id] [int] NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[lat] [float] NOT NULL,
	[lon] [float] NOT NULL,
	[title] [nvarchar](300) NOT NULL,
 CONSTRAINT [PK_tblShops] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblWOMENItems]    Script Date: 25/08/2017 15:38:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblWOMENItems](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Section] [nvarchar](10) NOT NULL,
	[Price] [float] NOT NULL,
	[Discount] [smallint] NULL,
	[ImagePath] [nvarchar](200) NOT NULL,
 CONSTRAINT [PK_tblWOMENItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[tblMENItems] ON 

INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (1, N'Slim Fit Blazer', N'NEW', 40, 50, N'Slim Fit Blazer.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (2, N'Slim Fit Tweed Blazer', N'HOT', 40, 20, N'Slim Fit Tweed Blazer.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (3, N'Longline Check Buffalo Shirt Grandad Collar', N'NEW', 14, 10, N'Longline Check Buffalo Shirt Grandad Collar.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (4, N'Zip Through Hoodie', N'HOT', 12, NULL, N'Zip Through Hoodie.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (5, N'Nike Breathe Tailwind Clv Shortsleeve Top', N'HOT', 30, NULL, N'Nike Breathe Tailwind Clv Shortsleeve Top.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (6, N'Skinny Fit Suit Blazer', N'NEW', 40, NULL, N'Skinny Fit Suit Blazer.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (7, N'Flecked Double Breasted Smart Blazer', N'NEW', 40, NULL, N'Flecked Double Breasted Smart Blazer.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (8, N'Skinny Fit Fashion Jeans', N'HOT', 24, 15, N'Skinny Fit Fashion Jeans.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (9, N'Nike Flex Black Running Shorts', N'HOT', 25, NULL, N'Nike Flex Black Running Shorts.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (10, N'3 Pack Short Sleeve Muscle Fit Polos', N'HOT', 20, 10, N'3 Pack Short Sleeve Muscle Fit Polos.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (11, N'Short Sleeve Linen Blend  Placket Knitted T Shirt', N'HOT', 12, 10, N'Short Sleeve Linen Blend  Placket Knitted T Shirt.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (13, N'Long Sleeve Colour Blocked Shirt', N'NEW', 16, NULL, N'Long Sleeve Colour Blocked Shirt.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (15, N'Tailored Check Blazer', N'NEW', 40, NULL, N'Tailored Check Blazer.jpg')
INSERT [dbo].[tblMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (16, N'Skinny Tailored Suit Blazer', N'NEW', 40, NULL, N'Skinny Tailored Suit Blazer.jpg')
SET IDENTITY_INSERT [dbo].[tblMENItems] OFF
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (1, N'CRSAzrieliMall', 32.074573, 34.79181, N'CRS Azrieli mall Azrieli Center, Derech Menachem Begin 132, Tel Aviv-Yafo, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (2, N'CRSBigPoleg', 32.276466, 34.861647, N'CRS BIG Netania Poleg Beni Gaon St 3, Netanya, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (3, N'CRSGrandCanyon', 32.789711, 35.007822, N'CRS Grand Canyon Mall Derech Simha Golan 54, Haifa, 3299001, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (4, N'CRSMallHayam', 29.549788, 34.953916, N'CRS Mall Hayam Hpalmach 1 ,Eilat, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (5, N'CRSBigPH', 32.488597, 34.970715, N'CRS BIG Pardes Hanna Tidhar St 1, Pardes Hanna-Karkur, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (6, N'CRSBigBS', 31.242577, 34.81061, N'CRS Big Beer Sheva Derekh Hebron 21, Beersheba, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (7, N'CRSBigKS', 33.192848, 35.571685, N'CRS Big Kiryat Shmona - Building A, Qiryat Shemona, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (8, N'CRSMalhaMall', 31.751601, 35.187316, N'CRS Malha Mall Derech Agudat Sport Beitar 1, Jerusalem, 96952, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (9, N'CRSHazahavMall', 31.990302, 34.774205, N'CRS HaZahav Mall David Saharov St 21, Rishon LeTsiyon, Israel')
INSERT [dbo].[tblShops] ([Id], [name], [lat], [lon], [title]) VALUES (10, N'CRSBigFashionTiberias', 32.790528, 35.53368, N'CRS Big Fashion Tiberias Yehuda Halevi St 1, Tiberias, 7570728, Israel')
SET IDENTITY_INSERT [dbo].[tblWOMENItems] ON 

INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (1, N'Mia Fitted Cotton Shirt', N'NEW', 18, NULL, N'Mia Fitted Cotton Shirt.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (2, N'Rae Belted Choker Long Sleeved Bodycon Dress', N'NEW', 20, 10, N'Rae Belted Choker Long Sleeved Bodycon Dress.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (3, N'Pandora Floral Crochet Waist Maxi Dress', N'HOT', 25, NULL, N'Pandora Floral Crochet Waist Maxi Dress.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (4, N'Candy Bodycon Dress', N'NEW', 20, NULL, N'Candy Bodycon Dress.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (5, N'Boutique Fi Sequin Print Mesh Bodycon Dress', N'NEW', 30, 25, N'Boutique Fi Sequin Print Mesh Bodycon Dress.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (6, N'Catherine Scuba Plunge Cross Bralet', N'HOT', 8, NULL, N'Catherine Scuba Plunge Cross Bralet.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (7, N'Beth Paisley Print Shorts', N'NEW', 8, 30, N'Beth Paisley Print Shorts.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (8, N'Una Open Choker Neck Detail Long Sleeve Blouse', N'HOT', 18, NULL, N'Una Open Choker Neck Detail Long Sleeve Blouse.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (9, N'Maisy Basic Jersey Mini Skirt', N'HOT', 4, 20, N'Maisy Basic Jersey Mini Skirt.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (10, N'Lara Fit Sweat Squad Slogan Running Vest', N'HOT', 14, NULL, N'Lara Fit Sweat Squad Slogan Running Vest.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (11, N'Charlie High Waisted Mid Wash Jeans', N'HOT', 22, 15, N'Charlie High Waisted Mid Wash Jeans.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (12, N'Boutique Bailey Corded Lace Bodycon Dress', N'NEW', 25, NULL, N'Boutique Bailey Corded Lace Bodycon Dress.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (13, N'Sally Sunflower Woven Cami', N'NEW', 20, NULL, N'Sally Sunflower Woven Cami.jpg')
INSERT [dbo].[tblWOMENItems] ([Id], [Name], [Section], [Price], [Discount], [ImagePath]) VALUES (14, N'Under Armour Sports Bra', N'HOT', 12, NULL, N'Under Armour Sports Bra.jpg')
SET IDENTITY_INSERT [dbo].[tblWOMENItems] OFF
ALTER TABLE [dbo].[tblMENItems]  WITH CHECK ADD  CONSTRAINT [CK_tblMENItems] CHECK  (([Section]='New' OR [Section]='Hot'))
GO
ALTER TABLE [dbo].[tblMENItems] CHECK CONSTRAINT [CK_tblMENItems]
GO
ALTER TABLE [dbo].[tblOrders]  WITH CHECK ADD  CONSTRAINT [CK_tblOrders] CHECK  (([Phone] like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'))
GO
ALTER TABLE [dbo].[tblOrders] CHECK CONSTRAINT [CK_tblOrders]
GO
ALTER TABLE [dbo].[tblOrders]  WITH CHECK ADD  CONSTRAINT [CK_tblOrders_1] CHECK  (([CreditCardNumber] like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'))
GO
ALTER TABLE [dbo].[tblOrders] CHECK CONSTRAINT [CK_tblOrders_1]
GO
ALTER TABLE [dbo].[tblOrders]  WITH CHECK ADD  CONSTRAINT [CK_tblOrders_2] CHECK  (([email] like '%_@_%'))
GO
ALTER TABLE [dbo].[tblOrders] CHECK CONSTRAINT [CK_tblOrders_2]
GO
ALTER TABLE [dbo].[tblWOMENItems]  WITH CHECK ADD  CONSTRAINT [CK_tblWOMENItems] CHECK  (([Section]='New' OR [Section]='Hot'))
GO
ALTER TABLE [dbo].[tblWOMENItems] CHECK CONSTRAINT [CK_tblWOMENItems]
GO
/****** Object:  StoredProcedure [dbo].[Get_User_Id]    Script Date: 25/08/2017 15:38:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Get_User_Id] @Email NVARCHAR(50), @UserId Int OUTPUT
AS
	IF NOT EXISTS (SELECT TOP 1 1 FROM [dbo].[User] WHERE Email = @Email)
	BEGIN
		INSERT INTO [dbo].[User] VALUES(@Email,1)
		SET @UserId = SCOPE_IDENTITY()
	END
	ELSE
	BEGIN
		SELECT @UserId = Id FROM [dbo].[User] WHERE Email = @Email
	END
RETURN


GO
USE [master]
GO
ALTER DATABASE [cegroup8Db] SET  READ_WRITE 
GO
