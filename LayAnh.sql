use shopmobi
go

CREATE PROCEDURE [dbo].[LayAnh_id_sp]
	@id_sp int
AS
begin
	select top(1) duongdan from tbl_anh where id_sp = @id_sp
end

GO
----drop proc LayAnh_id_sp

--CREATE PROCEDURE [dbo].[LayAnh_id_sp]
--	@id_sp int
--AS
--begin
--	select duongdan from tbl_anh where id_sp = @id_sp
--end

--GO
--exec LayAnh_id_sp 1
--go
--exec LayAnh_id_sp 2
--go

--create function LayAnh_id (@id_sp int)
--	returns nvarchar(255)
--as
--begin
--	declare @anh nvarchar(255)
--	set @anh = (select top(1) duongdan from tbl_anh where id_sp = @id_sp)

--	return @anh
--end

--GO

----print dbo.LayAnh_id (1)

--create function LayAnh ()
--	returns @BangAnh table (Link nvarchar(255))
--as
--begin
--	insert into @BangAnh (Link)
--		select (select dbo.LayAnh_id(tbl_sanpham.id)) as Anh 
--		from tbl_sanpham 

--	return
--end
--GO
---- drop function LayAnh
--select * from LayAnh()