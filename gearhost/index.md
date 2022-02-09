# Gearhost


## 介绍 ##

GearHost是一家国外主机提供商，支持.NET,PHP,Node.js。
提供100M免费空间。

免费空间介绍：
> Ideal for experimenting with .NET and PHP cloud applications in a limited sandbox but full of features.

> SHARED Web Node
> 1 Max Worker
> 256MB / 5% CPU
> 1GB Bandwidth
> 100MB Storage
> Custom Domains

[官网](5656.gq/dxraKA)的介绍是：Signup for free and deploy 100 CloudSites and 100 Databases for $0/mo.
实际上没有绑定银行卡仅能创建5个CloudSites。
## 注册 ##

点击[这里](5656.gq/dxraKA)进行注册。只需要一个电子邮件地址，注册完后会收到一封确认邮件，确认后登录来到管理界面

![管理界面](/gearhost/1.png)

## 创建 ##
点击右上角的“Add CloudSite”进行创建

![创建](/gearhost/2.png)

在上方的输入框内输入一个app名称，输入之后会检测是否已经使用，虽然后面给的是gearhostpreview.com域，但是仍然可以通过app名+.gear.host来访问并且支持https（后话）

选好规格后（肯定先选免费啊）点击下面的"Create CloudSite"

创建时会显示“Building”，耐心等待，一般五六分钟后就可以使用了。

## 使用 ##
创建完成后，点击右边的放大镜符号可以预览（使用gearhostpreview.com地址）。点击❌删除。

点击创建好的app蓝字，来到仪表板，在这里可以选择“Overview”,“Publish”,“Config”,“Scale”,“Domains”,“Email”,“Add-ons”,“Webjobs”.

![仪表板](/gearhost/4.png)

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9101785228583606"
     data-ad-slot="9293552420"></ins>

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

# Overview #

在这里查看CPU Time，Data In，Data Out，Http Server Errors，Requests等数据，并有图表展示
![Overview](/gearhost/5.png)
# Publish #

在这里查看上传信息，并有FTP信息，可以通过Git部署，可以点击FileZilla图标下载FTP登录信息并导入。

注：FTP的Password不可自定义，只可以重置（重新生成）。
![Publish](/gearhost/6.png)
# Config #

![Config](/gearhost/7.png)

没什么好说的，可以设置.NET版本和php版本，包括默认文档设置，变量设置。
# Scale #
![Scale](/gearhost/8.png)

此处可以升级你的CloudSites。
# Domains #
![Domains](/gearhost/9.png)
绑定自己的域名，可以改NS，也可以设置A记录（支持二级域名）
# Email #
需要信用卡验证
# Add-ons #
需要信用卡验证
# Webjobs #
需要更高级别的虚拟主机（付费主机）

## PHP info ##
```
PHP Version 7.1.4
System	Windows NT CSSN0009 6.3 build 9600 (Windows Server 2012 R2 Standard Edition) i586
Build Date	Apr 11 2017 19:53:43
Compiler	MSVC14 (Visual C++ 2015)
Architecture	x86
Configure Command	cscript /nologo configure.js "--enable-snapshot-build" "--enable-debug-pack" "--disable-zts" "--with-pdo-oci=c:\php-sdk\oracle\x86\instantclient_12_1\sdk,shared" "--with-oci8-12c=c:\php-sdk\oracle\x86\instantclient_12_1\sdk,shared" "--enable-object-out-dir=../obj/" "--enable-com-dotnet=shared" "--with-mcrypt=static" "--without-analyzer" "--with-pgo"
Server API	CGI/FastCGI
Virtual Directory Support	disabled
Configuration File (php.ini) Path	C:\Windows
Loaded Configuration File	C:\local\Config\PHP-7.1.4\php.ini
Scan this dir for additional .ini files	(none)
Additional .ini files parsed	(none)
PHP API	20160303
PHP Extension	20160303
Zend Extension	320160303
Zend Extension Build	API320160303,NTS,VC14
PHP Extension Build	API20160303,NTS,VC14
Debug Build	no
Thread Safety	disabled
Zend Signal Handling	disabled
Zend Memory Manager	enabled
Zend Multibyte Support	provided by mbstring
IPv6 Support	enabled
DTrace Support	disabled
Registered PHP Streams	php, file, glob, data, http, ftp, zip, compress.zlib, https, ftps, phar, sqlsrv
Registered Stream Socket Transports	tcp, udp, ssl, sslv3, tls, tlsv1.0, tlsv1.1, tlsv1.2
Registered Stream Filters	convert.iconv.*, mcrypt.*, mdecrypt.*, string.rot13, string.toupper, string.tolower, string.strip_tags, convert.*, consumed, dechunk, zlib.*
Zend logoThis program makes use of the Zend Scripting Language Engine:
Zend Engine v3.1.0, Copyright (c) 1998-2017 Zend Technologies
    with Zend OPcache v7.1.4, Copyright (c) 1999-2017, by Zend Technologies
Configuration
bcmath
BCMath support	enabled
Directive	Local Value	Master Value
bcmath.scale	0	0
calendar
Calendar support	enabled
cgi-fcgi
Directive	Local Value	Master Value
cgi.check_shebang_line	1	1
cgi.discard_path	0	0
cgi.fix_pathinfo	1	1
cgi.force_redirect	0	0
cgi.nph	0	0
cgi.redirect_status_env	no value	no value
cgi.rfc2616_headers	0	0
fastcgi.impersonate	1	1
fastcgi.logging	0	0
com_dotnet
COM support	enabled
DCOM support	disabled
.Net support	enabled
Directive	Local Value	Master Value
com.allow_dcom	no value	no value
com.autoregister_casesensitive	1	1
com.autoregister_typelib	0	0
com.autoregister_verbose	0	0
com.code_page	no value	no value
com.typelib_file	no value	no value
Core
PHP Version	7.1.4
Directive	Local Value	Master Value
allow_url_fopen	On	On
allow_url_include	Off	Off
arg_separator.input	&	&
arg_separator.output	&	&
auto_append_file	no value	no value
auto_globals_jit	On	On
auto_prepend_file	no value	no value
browscap	no value	no value
default_charset	UTF-8	UTF-8
default_mimetype	text/html	text/html
disable_classes	no value	no value
disable_functions	no value	no value
display_errors	Off	Off
display_startup_errors	Off	Off
doc_root	no value	no value
docref_ext	no value	no value
docref_root	no value	no value
enable_dl	Off	Off
enable_post_data_reading	On	On
error_append_string	no value	no value
error_log	C:\home\LogFiles\php_errors.log	C:\home\LogFiles\php_errors.log
error_prepend_string	no value	no value
error_reporting	22527	22527
expose_php	On	On
extension_dir	C:\Program Files (x86)\PHP\v7.1\ext\	C:\Program Files (x86)\PHP\v7.1\ext\
file_uploads	On	On
hard_timeout	2	2
highlight.comment	#FF8000	#FF8000
highlight.default	#0000BB	#0000BB
highlight.html	#000000	#000000
highlight.keyword	#007700	#007700
highlight.string	#DD0000	#DD0000
html_errors	On	On
ignore_repeated_errors	Off	Off
ignore_repeated_source	Off	Off
ignore_user_abort	Off	Off
implicit_flush	Off	Off
include_path	.;C:\php\pear	.;C:\php\pear
input_encoding	no value	no value
internal_encoding	no value	no value
log_errors	Off	Off
log_errors_max_len	1024	1024
mail.add_x_header	On	On
mail.force_extra_parameters	no value	no value
mail.log	no value	no value
max_execution_time	300	300
max_file_uploads	20	20
max_input_nesting_level	64	64
max_input_time	60	60
max_input_vars	1000	1000
memory_limit	128M	128M
open_basedir	no value	no value
output_buffering	4096	4096
output_encoding	no value	no value
output_handler	no value	no value
post_max_size	8M	8M
precision	14	14
realpath_cache_size	4096K	4096K
realpath_cache_ttl	120	120
register_argc_argv	Off	Off
report_memleaks	On	On
report_zend_debug	On	On
request_order	GP	GP
sendmail_from	no value	no value
sendmail_path	no value	no value
serialize_precision	17	17
short_open_tag	On	On
SMTP	localhost	localhost
smtp_port	25	25
sql.safe_mode	Off	Off
sys_temp_dir	no value	no value
track_errors	Off	Off
unserialize_callback_func	no value	no value
upload_max_filesize	8M	8M
upload_tmp_dir	C:\local\Temp	C:\local\Temp
user_dir	no value	no value
user_ini.cache_ttl	300	300
user_ini.filename	.user.ini	.user.ini
variables_order	GPCS	GPCS
windows.show_crt_warning	Off	Off
xmlrpc_error_number	0	0
xmlrpc_errors	Off	Off
zend.assertions	-1	-1
zend.detect_unicode	On	On
zend.enable_gc	On	On
zend.multibyte	Off	Off
zend.script_encoding	no value	no value
ctype
ctype functions	enabled
curl
cURL support	enabled
cURL Information	7.53.1
Age	3
Features
AsynchDNS	Yes
CharConv	No
Debug	No
GSS-Negotiate	No
IDN	Yes
IPv6	Yes
krb4	No
Largefile	Yes
libz	Yes
NTLM	Yes
NTLMWB	No
SPNEGO	Yes
SSL	Yes
SSPI	Yes
TLS-SRP	No
HTTP2	Yes
GSSAPI	No
KERBEROS5	Yes
UNIX_SOCKETS	No
PSL	No
Protocols	dict, file, ftp, ftps, gopher, http, https, imap, imaps, ldap, pop3, pop3s, rtsp, scp, sftp, smtp, smtps, telnet, tftp
Host	i386-pc-win32
SSL Version	OpenSSL/1.0.2k
ZLib Version	1.2.8
libSSH Version	libssh2/1.8.0
date
date/time support	enabled
"Olson" Timezone Database Version	2017.2
Timezone Database	internal
Default timezone	Asia/Shanghai
Directive	Local Value	Master Value
date.default_latitude	31.7667	31.7667
date.default_longitude	35.2333	35.2333
date.sunrise_zenith	90.583333	90.583333
date.sunset_zenith	90.583333	90.583333
date.timezone	America/Los_Angeles	America/Los_Angeles
dom
DOM/XML	enabled
DOM/XML API Version	20031129
libxml Version	2.9.4
HTML Support	enabled
XPath Support	enabled
XPointer Support	enabled
Schema Support	enabled
RelaxNG Support	enabled
exif
EXIF Support	enabled
EXIF Version	1.4 $Id: 8bdc0c8f27c2c9dd1f7551f1f9fe3ab57a06a4b1 $
Supported EXIF Version	0220
Supported filetypes	JPEG,TIFF
Directive	Local Value	Master Value
exif.decode_jis_intel	JIS	JIS
exif.decode_jis_motorola	JIS	JIS
exif.decode_unicode_intel	UCS-2LE	UCS-2LE
exif.decode_unicode_motorola	UCS-2BE	UCS-2BE
exif.encode_jis	no value	no value
exif.encode_unicode	ISO-8859-15	ISO-8859-15
fileinfo
fileinfo support	enabled
version	1.0.5
libmagic	522
filter
Input Validation and Filtering	enabled
Revision	$Id: cdc5e15bb616f10210b94ecd8789e66c927a375f $
Directive	Local Value	Master Value
filter.default	unsafe_raw	unsafe_raw
filter.default_flags	no value	no value
gd
GD Support	enabled
GD Version	bundled (2.1.0 compatible)
FreeType Support	enabled
FreeType Linkage	with freetype
FreeType Version	2.7.0
GIF Read Support	enabled
GIF Create Support	enabled
JPEG Support	enabled
libJPEG Version	9 compatible
PNG Support	enabled
libPNG Version	1.6.21
WBMP Support	enabled
XPM Support	enabled
libXpm Version	30512
XBM Support	enabled
WebP Support	enabled
Directive	Local Value	Master Value
gd.jpeg_ignore_warning	1	1
gettext
GetText Support	enabled
hash
hash support	enabled
Hashing Engines	md2 md4 md5 sha1 sha224 sha256 sha384 sha512/224 sha512/256 sha512 sha3-224 sha3-256 sha3-384 sha3-512 ripemd128 ripemd160 ripemd256 ripemd320 whirlpool tiger128,3 tiger160,3 tiger192,3 tiger128,4 tiger160,4 tiger192,4 snefru snefru256 gost gost-crypto adler32 crc32 crc32b fnv132 fnv1a32 fnv164 fnv1a64 joaat haval128,3 haval160,3 haval192,3 haval224,3 haval256,3 haval128,4 haval160,4 haval192,4 haval224,4 haval256,4 haval128,5 haval160,5 haval192,5 haval224,5 haval256,5
MHASH support	Enabled
MHASH API Version	Emulated Support
iconv
iconv support	enabled
iconv implementation	"libiconv"
iconv library version	1.15
Directive	Local Value	Master Value
iconv.input_encoding	no value	no value
iconv.internal_encoding	no value	no value
iconv.output_encoding	no value	no value
imap
IMAP c-Client Version	2007f
SSL Support	enabled
intl
Internationalization support	enabled
version	1.1.0
ICU version	57.1
ICU Data version	57.1
Directive	Local Value	Master Value
intl.default_locale	no value	no value
intl.error_level	0	0
intl.use_exceptions	0	0
json
json support	enabled
json version	1.5.0
libxml
libXML support	active
libXML Compiled Version	2.9.4
libXML Loaded Version	20904
libXML streams	enabled
mbstring
Multibyte Support	enabled
Multibyte string engine	libmbfl
HTTP input encoding translation	disabled
libmbfl version	1.3.2
oniguruma version	5.9.6
mbstring extension makes use of "streamable kanji code filter and converter", which is distributed under the GNU Lesser General Public License version 2.1.
Multibyte (japanese) regex support	enabled
Multibyte regex (oniguruma) version	5.9.6
Directive	Local Value	Master Value
mbstring.detect_order	no value	no value
mbstring.encoding_translation	Off	Off
mbstring.func_overload	0	0
mbstring.http_input	no value	no value
mbstring.http_output	no value	no value
mbstring.http_output_conv_mimetypes	^(text/|application/xhtml\+xml)	^(text/|application/xhtml\+xml)
mbstring.internal_encoding	no value	no value
mbstring.language	neutral	neutral
mbstring.strict_detection	Off	Off
mbstring.substitute_character	no value	no value
mcrypt
mcrypt support	enabled
mcrypt_filter support	enabled
Version	2.5.8
Api No	20021217
Supported ciphers	cast-128 gost rijndael-128 twofish cast-256 loki97 rijndael-192 saferplus wake blowfish-compat des rijndael-256 serpent xtea blowfish enigma rc2 tripledes arcfour
Supported modes	cbc cfb ctr ecb ncfb nofb ofb stream
Directive	Local Value	Master Value
mcrypt.algorithms_dir	no value	no value
mcrypt.modes_dir	no value	no value
mysqli
MysqlI Support	enabled
Client API library version	mysqlnd 5.0.12-dev - 20150407 - $Id: b396954eeb2d1d9ed7902b8bae237b287f21ad9e $
Active Persistent Links	0
Inactive Persistent Links	0
Active Links	1
Directive	Local Value	Master Value
mysqli.allow_local_infile	On	On
mysqli.allow_persistent	On	On
mysqli.default_host	no value	no value
mysqli.default_port	3306	3306
mysqli.default_pw	no value	no value
mysqli.default_socket	no value	no value
mysqli.default_user	no value	no value
mysqli.max_links	Unlimited	Unlimited
mysqli.max_persistent	Unlimited	Unlimited
mysqli.reconnect	Off	Off
mysqli.rollback_on_cached_plink	Off	Off
mysqlnd
mysqlnd	enabled
Version	mysqlnd 5.0.12-dev - 20150407 - $Id: b396954eeb2d1d9ed7902b8bae237b287f21ad9e $
Compression	supported
core SSL	supported
extended SSL	not supported
Command buffer size	4096
Read buffer size	32768
Read timeout	31536000
Collecting statistics	Yes
Collecting memory statistics	No
Tracing	n/a
Loaded plugins	mysqlnd,debug_trace,auth_plugin_mysql_native_password,auth_plugin_mysql_clear_password
API Extensions	mysqli,pdo_mysql
mysqlnd statistics	
bytes_sent	18986424
bytes_received	52282243
packets_sent	370100
packets_received	1462294
protocol_overhead_in	5849176
protocol_overhead_out	1480400
bytes_received_ok_packet	0
bytes_received_eof_packet	0
bytes_received_rset_header_packet	1082934
bytes_received_rset_field_meta_packet	0
bytes_received_rset_row_packet	1137413
bytes_received_prepare_response_packet	27026250
bytes_received_change_user_packet	21714273
packets_sent_command	176963
packets_received_ok	0
packets_received_eof	0
packets_received_rset_header	120326
packets_received_rset_field_meta	0
packets_received_rset_row	168877
packets_received_prepare_response	454568
packets_received_change_user	702349
result_set_queries	120326
non_result_set_queries	48551
no_index_used	47815
bad_index_used	0
slow_queries	0
buffered_sets	120326
unbuffered_sets	0
ps_buffered_sets	0
ps_unbuffered_sets	0
flushed_normal_sets	0
flushed_ps_sets	0
ps_prepared_never_executed	0
ps_prepared_once_executed	0
rows_fetched_from_server_normal	582023
rows_fetched_from_server_ps	0
rows_buffered_from_client_normal	582023
rows_buffered_from_client_ps	0
rows_fetched_from_client_normal_buffered	582023
rows_fetched_from_client_normal_unbuffered	0
rows_fetched_from_client_ps_buffered	0
rows_fetched_from_client_ps_unbuffered	0
rows_fetched_from_client_ps_cursor	0
rows_affected_normal	80874
rows_affected_ps	0
rows_skipped_normal	582023
rows_skipped_ps	0
copy_on_write_saved	0
copy_on_write_performed	0
command_buffer_too_small	0
connect_success	8087
connect_failure	0
connection_reused	0
reconnect	0
pconnect_success	0
active_connections	18446744073709543531
active_persistent_connections	0
explicit_close	8086
implicit_close	0
disconnect_close	0
in_middle_of_command_close	0
explicit_free_result	120320
implicit_free_result	0
explicit_stmt_close	0
implicit_stmt_close	0
mem_emalloc_count	0
mem_emalloc_amount	0
mem_ecalloc_count	0
mem_ecalloc_amount	0
mem_erealloc_count	0
mem_erealloc_amount	0
mem_efree_count	0
mem_efree_amount	0
mem_malloc_count	0
mem_malloc_amount	0
mem_calloc_count	0
mem_calloc_amount	0
mem_realloc_count	0
mem_realloc_amount	0
mem_free_count	0
mem_free_amount	0
mem_estrndup_count	0
mem_strndup_count	0
mem_estrdup_count	0
mem_strdup_count	0
mem_edupl_count	0
mem_dupl_count	0
proto_text_fetched_null	0
proto_text_fetched_bit	0
proto_text_fetched_tinyint	105204
proto_text_fetched_short	0
proto_text_fetched_int24	42
proto_text_fetched_int	250992
proto_text_fetched_bigint	7737
proto_text_fetched_decimal	0
proto_text_fetched_float	0
proto_text_fetched_double	0
proto_text_fetched_date	0
proto_text_fetched_year	0
proto_text_fetched_time	0
proto_text_fetched_datetime	0
proto_text_fetched_timestamp	0
proto_text_fetched_string	622806
proto_text_fetched_blob	0
proto_text_fetched_enum	558060
proto_text_fetched_set	0
proto_text_fetched_geometry	0
proto_text_fetched_other	0
proto_binary_fetched_null	0
proto_binary_fetched_bit	0
proto_binary_fetched_tinyint	0
proto_binary_fetched_short	0
proto_binary_fetched_int24	0
proto_binary_fetched_int	0
proto_binary_fetched_bigint	0
proto_binary_fetched_decimal	0
proto_binary_fetched_float	0
proto_binary_fetched_double	0
proto_binary_fetched_date	0
proto_binary_fetched_year	0
proto_binary_fetched_time	0
proto_binary_fetched_datetime	0
proto_binary_fetched_timestamp	0
proto_binary_fetched_string	0
proto_binary_fetched_json	0
proto_binary_fetched_blob	0
proto_binary_fetched_enum	0
proto_binary_fetched_set	0
proto_binary_fetched_geometry	0
proto_binary_fetched_other	0
init_command_executed_count	0
init_command_failed_count	0
com_quit	8086
com_init_db	0
com_query	168877
com_field_list	0
com_create_db	0
com_drop_db	0
com_refresh	0
com_shutdown	0
com_statistics	0
com_process_info	0
com_connect	0
com_process_kill	0
com_debug	0
com_ping	0
com_time	0
com_delayed_insert	0
com_change_user	0
com_binlog_dump	0
com_table_dump	0
com_connect_out	0
com_register_slave	0
com_stmt_prepare	0
com_stmt_execute	0
com_stmt_send_long_data	0
com_stmt_close	0
com_stmt_reset	0
com_stmt_set_option	0
com_stmt_fetch	0
com_deamon	0
bytes_received_real_data_normal	17327651
bytes_received_real_data_ps	0
openssl
OpenSSL support	enabled
OpenSSL Library Version	OpenSSL 1.0.2k 26 Jan 2017
OpenSSL Header Version	OpenSSL 1.0.2k 26 Jan 2017
Openssl default config	c:/usr/local/ssl/openssl.cnf
Directive	Local Value	Master Value
openssl.cafile	no value	no value
openssl.capath	no value	no value
pcre
PCRE (Perl Compatible Regular Expressions) Support	enabled
PCRE Library Version	8.38 2015-11-23
PCRE JIT Support	enabled
Directive	Local Value	Master Value
pcre.backtrack_limit	1000000	1000000
pcre.jit	1	1
pcre.recursion_limit	100000	100000
PDO
PDO support	enabled
PDO drivers	mysql, sqlite, sqlsrv, pgsql
pdo_mysql
PDO Driver for MySQL	enabled
Client API version	mysqlnd 5.0.12-dev - 20150407 - $Id: b396954eeb2d1d9ed7902b8bae237b287f21ad9e $
pdo_pgsql
PDO Driver for PostgreSQL	enabled
PostgreSQL(libpq) Version	9.6.2
Module version	7.1.4
Revision	$Id: 93712a6af603ebb2ee5792c5be271d4d03edfbde $
pdo_sqlite
PDO Driver for SQLite 3.x	enabled
SQLite Library	3.15.1
pdo_sqlsrv
pdo_sqlsrv support	enabled
ExtensionVer	4.1.5.9318
Directive	Local Value	Master Value
pdo_sqlsrv.client_buffer_max_kb_size	10240	10240
pdo_sqlsrv.log_severity	0	0
pgsql
PostgreSQL Support	enabled
PostgreSQL(libpq) Version	9.6.2
PostgreSQL(libpq)	PostgreSQL 9.6.2 (win32)
Multibyte character support	enabled
SSL support	enabled
Active Persistent Links	0
Active Links	0
Directive	Local Value	Master Value
pgsql.allow_persistent	On	On
pgsql.auto_reset_persistent	Off	Off
pgsql.ignore_notice	Off	Off
pgsql.log_notice	Off	Off
pgsql.max_links	Unlimited	Unlimited
pgsql.max_persistent	Unlimited	Unlimited
Phar
Phar: PHP Archive support	enabled
Phar EXT version	2.0.2
Phar API version	1.1.1
SVN revision	$Id: 59c11f4e29768bfbbf6f41cb469abd81d8655850 $
Phar-based phar archives	enabled
Tar-based phar archives	enabled
ZIP-based phar archives	enabled
gzip compression	enabled
bzip2 compression	disabled (install pecl/bz2)
OpenSSL support	enabled
Phar based on pear/PHP_Archive, original concept by Davey Shafik.
Phar fully realized by Gregory Beaver and Marcus Boerger.
Portions of tar implementation Copyright (c) 2003-2009 Tim Kientzle.
Directive	Local Value	Master Value
phar.cache_list	no value	no value
phar.readonly	On	On
phar.require_hash	On	On
readline
Readline Support	enabled
Readline library	WinEditLine
Directive	Local Value	Master Value
cli.pager	no value	no value
cli.prompt	\b \> 	\b \> 
Reflection
Reflection	enabled
Version	$Id: a06522d025b0af3e6ba10a0f6964086b7e6f5458 $
session
Session Support	enabled
Registered save handlers	files user wincache
Registered serializer handlers	php_serialize php php_binary wddx
Directive	Local Value	Master Value
session.auto_start	Off	Off
session.cache_expire	180	180
session.cache_limiter	nocache	nocache
session.cookie_domain	no value	no value
session.cookie_httponly	Off	Off
session.cookie_lifetime	0	0
session.cookie_path	/	/
session.cookie_secure	Off	Off
session.gc_divisor	1000	1000
session.gc_maxlifetime	1440	1440
session.gc_probability	1	1
session.lazy_write	On	On
session.name	PHPSESSID	PHPSESSID
session.referer_check	no value	no value
session.save_handler	wincache	wincache
session.save_path	C:\local\Temp	C:\local\Temp
session.serialize_handler	php	php
session.sid_bits_per_character	4	4
session.sid_length	32	32
session.upload_progress.cleanup	On	On
session.upload_progress.enabled	On	On
session.upload_progress.freq	1%	1%
session.upload_progress.min_freq	1	1
session.upload_progress.name	PHP_SESSION_UPLOAD_PROGRESS	PHP_SESSION_UPLOAD_PROGRESS
session.upload_progress.prefix	upload_progress_	upload_progress_
session.use_cookies	On	On
session.use_only_cookies	On	On
session.use_strict_mode	Off	Off
session.use_trans_sid	0	0
SimpleXML
Simplexml support	enabled
Revision	$Id: 7e5516dcdf2fe6ded7970eaeb6abd8d07df39a2a $
Schema support	enabled
soap
Soap Client	enabled
Soap Server	enabled
Directive	Local Value	Master Value
soap.wsdl_cache	1	1
soap.wsdl_cache_dir	/tmp	/tmp
soap.wsdl_cache_enabled	1	1
soap.wsdl_cache_limit	5	5
soap.wsdl_cache_ttl	86400	86400
SPL
SPL support	enabled
Interfaces	Countable, OuterIterator, RecursiveIterator, SeekableIterator, SplObserver, SplSubject
Classes	AppendIterator, ArrayIterator, ArrayObject, BadFunctionCallException, BadMethodCallException, CachingIterator, CallbackFilterIterator, DirectoryIterator, DomainException, EmptyIterator, FilesystemIterator, FilterIterator, GlobIterator, InfiniteIterator, InvalidArgumentException, IteratorIterator, LengthException, LimitIterator, LogicException, MultipleIterator, NoRewindIterator, OutOfBoundsException, OutOfRangeException, OverflowException, ParentIterator, RangeException, RecursiveArrayIterator, RecursiveCachingIterator, RecursiveCallbackFilterIterator, RecursiveDirectoryIterator, RecursiveFilterIterator, RecursiveIteratorIterator, RecursiveRegexIterator, RecursiveTreeIterator, RegexIterator, RuntimeException, SplDoublyLinkedList, SplFileInfo, SplFileObject, SplFixedArray, SplHeap, SplMinHeap, SplMaxHeap, SplObjectStorage, SplPriorityQueue, SplQueue, SplStack, SplTempFileObject, UnderflowException, UnexpectedValueException
sqlsrv
sqlsrv support	enabled
ExtensionVer	4.1.5.9318
Directive	Local Value	Master Value
sqlsrv.ClientBufferMaxKBSize	10240	10240
sqlsrv.LogSeverity	0	0
sqlsrv.LogSubsystems	0	0
sqlsrv.WarningsReturnAsErrors	On	On
standard
Dynamic Library Support	enabled
Internal Sendmail Support for Windows	enabled
Directive	Local Value	Master Value
assert.active	1	1
assert.bail	0	0
assert.callback	no value	no value
assert.exception	0	0
assert.quiet_eval	0	0
assert.warning	1	1
auto_detect_line_endings	0	0
default_socket_timeout	60	60
from	no value	no value
session.trans_sid_hosts	no value	no value
session.trans_sid_tags	a=href,area=href,frame=src,form=	a=href,area=href,frame=src,form=
url_rewriter.hosts	no value	no value
url_rewriter.tags	a=href,area=href,frame=src,input=src,form=fakeentry	a=href,area=href,frame=src,input=src,form=fakeentry
user_agent	no value	no value
tidy
Tidy support	enabled
libTidy Version	5.2.0
libTidy Release	2016/04/07
Extension Version	7.1.4 ($Id: f764b98c87afe8ab43162db66290eced256fb9f1 $)
Directive	Local Value	Master Value
tidy.clean_output	no value	no value
tidy.default_config	no value	no value
tokenizer
Tokenizer Support	enabled
wddx
WDDX Support	enabled
WDDX Session Serializer	enabled
wincache
File cache	enabled
Version	2.0.0.8
Owner	iisphp@microsoft.com
Build Date	Nov 14 2016 10:25:03
Directive	Local Value	Master Value
wincache.apppoolid	no value	no value
wincache.chkinterval	30	30
wincache.debuglevel	0	0
wincache.enablecli	Off	Off
wincache.fcachesize	128	128
wincache.fcenabled	On	On
wincache.fcenabledfilter	no value	no value
wincache.fcndetect	On	On
wincache.filecount	4096	4096
wincache.filemapdir	C:\local\Temp	C:\local\Temp
wincache.ignorelist	no value	no value
wincache.localheap	0	0
wincache.maxfilesize	512	512
wincache.namesalt	no value	no value
wincache.reroute_enabled	Off	Off
wincache.scachesize	8	8
wincache.ttlmax	1200	1200
wincache.ucachesize	8	8
wincache.ucenabled	On	On
xml
XML Support	active
XML Namespace Support	active
libxml2 Version	2.9.4
xmlreader
XMLReader	enabled
xmlrpc
core library version	xmlrpc-epi v. 0.51
php extension version	7.1.4
author	Dan Libby
homepage	http://xmlrpc-epi.sourceforge.net
open sourced by	Epinions.com
xmlwriter
XMLWriter	enabled
xsl
XSL	enabled
libxslt Version	1.1.29
libxslt compiled against libxml Version	2.9.4
EXSLT	enabled
libexslt Version	0.8.17
Zend OPcache
Opcode Caching	Up and Running
Optimization	Enabled
SHM Cache	Enabled
File Cache	Disabled
Startup	OK
Shared memory model	win32
Cache hits	242610
Cache misses	39
Used memory	23800288
Free memory	110417440
Wasted memory	0
Interned Strings Used memory	356584
Interned Strings Free memory	8032024
Cached scripts	39
Cached keys	73
Max keys	7963
OOM restarts	0
Hash keys restarts	0
Manual restarts	0
Directive	Local Value	Master Value
opcache.blacklist_filename	no value	no value
opcache.consistency_checks	0	0
opcache.dups_fix	Off	Off
opcache.enable	On	On
opcache.enable_cli	On	On
opcache.enable_file_override	Off	Off
opcache.error_log	no value	no value
opcache.fast_shutdown	0	0
opcache.file_cache	no value	no value
opcache.file_cache_consistency_checks	1	1
opcache.file_cache_fallback	1	1
opcache.file_cache_only	0	0
opcache.file_update_protection	2	2
opcache.force_restart_timeout	180	180
opcache.inherited_hack	On	On
opcache.interned_strings_buffer	8	8
opcache.log_verbosity_level	1	1
opcache.max_accelerated_files	4000	4000
opcache.max_file_size	0	0
opcache.max_wasted_percentage	5	5
opcache.memory_consumption	128	128
opcache.mmap_base	no value	no value
opcache.opt_debug_level	0	0
opcache.optimization_level	0x7FFFBFFF	0x7FFFBFFF
opcache.preferred_memory_model	no value	no value
opcache.protect_memory	0	0
opcache.restrict_api	no value	no value
opcache.revalidate_freq	20	20
opcache.revalidate_path	Off	Off
opcache.save_comments	1	1
opcache.use_cwd	On	On
opcache.validate_permission	Off	Off
opcache.validate_timestamps	On	On
zip
Zip	enabled
Zip version	1.13.5
Libzip version	1.1.2
zlib
ZLib Support	enabled
Stream Wrapper	compress.zlib://
Stream Filter	zlib.inflate, zlib.deflate
Compiled Version	1.2.8
Linked Version	1.2.8
Directive	Local Value	Master Value
zlib.output_compression	Off	Off
zlib.output_compression_level	-1	-1
zlib.output_handler	no value	no value
Additional Modules
Module Name
Environment
Variable	Value
_FCGI_X_PIPE_	\\.\pipe\IISFCGI-c22dcde8-cdeb-4967-9b90-6d7737f37484
PHP_FCGI_MAX_REQUESTS	10000
PHPRC	C:\local\Config\PHP-7.1.4\php.ini
APP_POOL_CONFIG	C:\DWASFiles\Sites\mjybaidu\Config\applicationhost.config
APP_POOL_ID	mjybaidu
COMPUTERNAME	CSSN0009
PROCESSOR_ARCHITEW6432	AMD64
PUBLIC	C:\Users\Public
LOCALAPPDATA	C:\local\LocalAppData
PSModulePath	C:\Windows\system32\WindowsPowerShell\v1.0\Modules\
PROCESSOR_ARCHITECTURE	x86
Path	C:\Program Files (x86)\nodejs\4.4.7;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\SysWOW64\config\systemprofile\AppData\Roaming\npm;C:\Program Files (x86)\nodejs\;C:\Program Files (x86)\Mercurial\;C:\Program Files (x86)\Git\cmd;c:\Program Files (x86)\Microsoft ASP.NET\ASP.NET Web Pages\v1.0\;C:\Program Files (x86)\PHP\v7.1;C:\Python27;
CommonProgramFiles(x86)	C:\Program Files (x86)\Common Files
ProgramFiles(x86)	C:\Program Files (x86)
PROCESSOR_LEVEL	6
ProgramFiles	C:\Program Files (x86)
PATHEXT	.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY
USERPROFILE	C:\local\UserProfile
SystemRoot	C:\Windows
ALLUSERSPROFILE	C:\local\ProgramData
FP_NO_HOST_CHECK	NO
ProgramData	C:\local\ProgramData
PROCESSOR_REVISION	2d07
USERNAME	CSSN0009$
CommonProgramW6432	C:\Program Files\Common Files
CommonProgramFiles	C:\Program Files (x86)\Common Files
OS	Windows_NT
PROCESSOR_IDENTIFIER	Intel64 Family 6 Model 45 Stepping 7, GenuineIntel
ComSpec	C:\Windows\system32\cmd.exe
SystemDrive	C:
TEMP	C:\local\Temp
NUMBER_OF_PROCESSORS	16
APPDATA	C:\local\AppData
TMP	C:\local\Temp
ProgramW6432	C:\Program Files
windir	C:\Windows
USERDOMAIN	CSCLOUD
WEBSITE_NODE_DEFAULT_VERSION	4.4.7
APPSETTING_WEBSITE_NODE_DEFAULT_VERSION	4.4.7
ScmType	None
APPSETTING_ScmType	None
WEBSITE_SITE_NAME	mjybaidu
APPSETTING_WEBSITE_SITE_NAME	mjybaidu
WEBSITE_AUTH_ENABLED	False
APPSETTING_WEBSITE_AUTH_ENABLED	False
REMOTEDEBUGGINGVERSION	11.0.611103.400
APPSETTING_REMOTEDEBUGGINGVERSION	11.0.611103.400
WEBSITE_AUTH_LOGOUT_PATH	/.auth/logout
APPSETTING_WEBSITE_AUTH_LOGOUT_PATH	/.auth/logout
WEBSITE_AUTH_AUTO_AAD	False
APPSETTING_WEBSITE_AUTH_AUTO_AAD	False
REGION_NAME	no value
HOME	C:\home
HOME_EXPANDED	C:\DWASFiles\Sites\mjybaidu\VirtualDirectory0
LOCAL_EXPANDED	C:\DWASFiles\Sites\mjybaidu
windows_tracing_flags	no value
windows_tracing_logfile	no value
WEBSITE_INSTANCE_ID	2928bea641e5fc2bb3c934ffa31ca78478f684f82d9c17ba6693976777a17aa9
WEBSITE_HTTPLOGGING_ENABLED	0
WEBSITE_SCM_ALWAYS_ON_ENABLED	0
WEBSITE_COMPUTE_MODE	Shared
WEBSITE_SKU	Free
WEBSITE_SCM_SEPARATE_STATUS	1
WEBSITE_IIS_SITE_NAME	mjybaidu
SITE_BITNESS	x86
WEBSITE_PROACTIVE_AUTOHEAL_ENABLED	False
WEBSITE_DYNAMIC_CACHE	0
REMOTEDEBUGGINGPORT	no value
REMOTEDEBUGGINGBITVERSION	vx86
WEBSITE_LOCALCACHE_ENABLED	False
WEBSOCKET_CONCURRENT_REQUEST_LIMIT	-1
WEBSITE_OWNER_NAME	3dd92418-6867-43e5-9182-209c4cdac1b1+defaultwebspace
WEBSITE_HOSTNAME	mjybaidu.gear.host
WEBSITE_RELAYS	no value
WEBSITE_REWRITE_TABLE	no value
WEBSITE_VOLUME_TYPE	PrimaryStorageVolume
PHP Variables
Variable	Value
$_REQUEST['plugin']	wmzz_debug
$_GET['plugin']	wmzz_debug
$_COOKIE['__cfduid']	d2507c23602454d2cf3232f20c2371aa31607090867
$_COOKIE['ARRAffinity']	849c5df8e963791e1852d1cd5623c2c79f2941b3a7f885dd52b8838be4f767b7
$_COOKIE['PHPSESSID']	2eb5e965360b7f05cd45cc7e837bcefa
$_COOKIE['uid']	1
$_COOKIE['pwd']	581363dc8a1c50f67b13258669b91bbb
$_SERVER['_FCGI_X_PIPE_']	\\.\pipe\IISFCGI-c22dcde8-cdeb-4967-9b90-6d7737f37484
$_SERVER['PHP_FCGI_MAX_REQUESTS']	10000
$_SERVER['PHPRC']	C:\local\Config\PHP-7.1.4\php.ini
$_SERVER['APP_POOL_CONFIG']	C:\DWASFiles\Sites\mjybaidu\Config\applicationhost.config
$_SERVER['APP_POOL_ID']	mjybaidu
$_SERVER['COMPUTERNAME']	CSSN0009
$_SERVER['PROCESSOR_ARCHITEW6432']	AMD64
$_SERVER['PUBLIC']	C:\Users\Public
$_SERVER['LOCALAPPDATA']	C:\local\LocalAppData
$_SERVER['PSModulePath']	C:\Windows\system32\WindowsPowerShell\v1.0\Modules\
$_SERVER['PROCESSOR_ARCHITECTURE']	x86
$_SERVER['Path']	C:\Program Files (x86)\nodejs\4.4.7;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\SysWOW64\config\systemprofile\AppData\Roaming\npm;C:\Program Files (x86)\nodejs\;C:\Program Files (x86)\Mercurial\;C:\Program Files (x86)\Git\cmd;c:\Program Files (x86)\Microsoft ASP.NET\ASP.NET Web Pages\v1.0\;C:\Program Files (x86)\PHP\v7.1;C:\Python27;
$_SERVER['CommonProgramFiles(x86)']	C:\Program Files (x86)\Common Files
$_SERVER['ProgramFiles(x86)']	C:\Program Files (x86)
$_SERVER['PROCESSOR_LEVEL']	6
$_SERVER['ProgramFiles']	C:\Program Files (x86)
$_SERVER['PATHEXT']	.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY
$_SERVER['USERPROFILE']	C:\local\UserProfile
$_SERVER['SystemRoot']	C:\Windows
$_SERVER['ALLUSERSPROFILE']	C:\local\ProgramData
$_SERVER['FP_NO_HOST_CHECK']	NO
$_SERVER['ProgramData']	C:\local\ProgramData
$_SERVER['PROCESSOR_REVISION']	2d07
$_SERVER['USERNAME']	CSSN0009$
$_SERVER['CommonProgramW6432']	C:\Program Files\Common Files
$_SERVER['CommonProgramFiles']	C:\Program Files (x86)\Common Files
$_SERVER['OS']	Windows_NT
$_SERVER['PROCESSOR_IDENTIFIER']	Intel64 Family 6 Model 45 Stepping 7, GenuineIntel
$_SERVER['ComSpec']	C:\Windows\system32\cmd.exe
$_SERVER['SystemDrive']	C:
$_SERVER['TEMP']	C:\local\Temp
$_SERVER['NUMBER_OF_PROCESSORS']	16
$_SERVER['APPDATA']	C:\local\AppData
$_SERVER['TMP']	C:\local\Temp
$_SERVER['ProgramW6432']	C:\Program Files
$_SERVER['windir']	C:\Windows
$_SERVER['USERDOMAIN']	CSCLOUD
$_SERVER['WEBSITE_NODE_DEFAULT_VERSION']	4.4.7
$_SERVER['APPSETTING_WEBSITE_NODE_DEFAULT_VERSION']	4.4.7
$_SERVER['ScmType']	None
$_SERVER['APPSETTING_ScmType']	None
$_SERVER['WEBSITE_SITE_NAME']	mjybaidu
$_SERVER['APPSETTING_WEBSITE_SITE_NAME']	mjybaidu
$_SERVER['WEBSITE_AUTH_ENABLED']	False
$_SERVER['APPSETTING_WEBSITE_AUTH_ENABLED']	False
$_SERVER['REMOTEDEBUGGINGVERSION']	11.0.611103.400
$_SERVER['APPSETTING_REMOTEDEBUGGINGVERSION']	11.0.611103.400
$_SERVER['WEBSITE_AUTH_LOGOUT_PATH']	/.auth/logout
$_SERVER['APPSETTING_WEBSITE_AUTH_LOGOUT_PATH']	/.auth/logout
$_SERVER['WEBSITE_AUTH_AUTO_AAD']	False
$_SERVER['APPSETTING_WEBSITE_AUTH_AUTO_AAD']	False
$_SERVER['REGION_NAME']	no value
$_SERVER['HOME']	C:\home
$_SERVER['HOME_EXPANDED']	C:\DWASFiles\Sites\mjybaidu\VirtualDirectory0
$_SERVER['LOCAL_EXPANDED']	C:\DWASFiles\Sites\mjybaidu
$_SERVER['windows_tracing_flags']	no value
$_SERVER['windows_tracing_logfile']	no value
$_SERVER['WEBSITE_INSTANCE_ID']	2928bea641e5fc2bb3c934ffa31ca78478f684f82d9c17ba6693976777a17aa9
$_SERVER['WEBSITE_HTTPLOGGING_ENABLED']	0
$_SERVER['WEBSITE_SCM_ALWAYS_ON_ENABLED']	0
$_SERVER['WEBSITE_COMPUTE_MODE']	Shared
$_SERVER['WEBSITE_SKU']	Free
$_SERVER['WEBSITE_SCM_SEPARATE_STATUS']	1
$_SERVER['WEBSITE_IIS_SITE_NAME']	mjybaidu
$_SERVER['SITE_BITNESS']	x86
$_SERVER['WEBSITE_PROACTIVE_AUTOHEAL_ENABLED']	False
$_SERVER['WEBSITE_DYNAMIC_CACHE']	0
$_SERVER['REMOTEDEBUGGINGPORT']	no value
$_SERVER['REMOTEDEBUGGINGBITVERSION']	vx86
$_SERVER['WEBSITE_LOCALCACHE_ENABLED']	False
$_SERVER['WEBSOCKET_CONCURRENT_REQUEST_LIMIT']	-1
$_SERVER['WEBSITE_OWNER_NAME']	3dd92418-6867-43e5-9182-209c4cdac1b1+defaultwebspace
$_SERVER['WEBSITE_HOSTNAME']	mjybaidu.gear.host
$_SERVER['WEBSITE_RELAYS']	no value
$_SERVER['WEBSITE_REWRITE_TABLE']	no value
$_SERVER['WEBSITE_VOLUME_TYPE']	PrimaryStorageVolume
$_SERVER['ORIG_PATH_INFO']	/index.php
$_SERVER['URL']	/index.php
$_SERVER['SERVER_SOFTWARE']	Microsoft-IIS/8.5
$_SERVER['SERVER_PROTOCOL']	HTTP/1.1
$_SERVER['SERVER_PORT_SECURE']	0
$_SERVER['SERVER_PORT']	80
$_SERVER['SERVER_NAME']	tb.majianyu.eu.org
$_SERVER['SCRIPT_NAME']	/index.php
$_SERVER['SCRIPT_FILENAME']	C:\home\site\wwwroot\index.php
$_SERVER['REQUEST_URI']	/index.php?plugin=wmzz_debug
$_SERVER['REQUEST_METHOD']	GET
$_SERVER['REMOTE_USER']	no value
$_SERVER['REMOTE_PORT']	40598
$_SERVER['REMOTE_HOST']	204.246.56.81
$_SERVER['REMOTE_ADDR']	204.246.56.81
$_SERVER['QUERY_STRING']	plugin=wmzz_debug
$_SERVER['PATH_TRANSLATED']	C:\home\site\wwwroot\index.php
$_SERVER['LOGON_USER']	no value
$_SERVER['LOCAL_ADDR']	204.246.56.208
$_SERVER['INSTANCE_META_PATH']	/LM/W3SVC/1290302564
$_SERVER['INSTANCE_NAME']	MJYBAIDU
$_SERVER['INSTANCE_ID']	1290302564
$_SERVER['HTTPS_SERVER_SUBJECT']	no value
$_SERVER['HTTPS_SERVER_ISSUER']	no value
$_SERVER['HTTPS_SECRETKEYSIZE']	no value
$_SERVER['HTTPS_KEYSIZE']	no value
$_SERVER['HTTPS']	off
$_SERVER['GATEWAY_INTERFACE']	CGI/1.1
$_SERVER['DOCUMENT_ROOT']	C:\home\site\wwwroot
$_SERVER['CONTENT_TYPE']	no value
$_SERVER['CONTENT_LENGTH']	0
$_SERVER['CERT_SUBJECT']	no value
$_SERVER['CERT_SERIALNUMBER']	no value
$_SERVER['CERT_ISSUER']	no value
$_SERVER['CERT_FLAGS']	no value
$_SERVER['CERT_COOKIE']	no value
$_SERVER['AUTH_USER']	no value
$_SERVER['AUTH_PASSWORD']	no value
$_SERVER['AUTH_TYPE']	no value
$_SERVER['APPL_PHYSICAL_PATH']	C:\home\site\wwwroot\
$_SERVER['APPL_MD_PATH']	/LM/W3SVC/1290302564/ROOT
$_SERVER['IIS_UrlRewriteModule']	7.1.1917.0
$_SERVER['LOG_QUERY_STRING']	plugin=wmzz_debug&X-ARR-LOG-ID=baca26b7-a6ea-4ebf-ac07-526bcc15d10f
$_SERVER['HTTP_WAS_DEFAULT_HOSTNAME']	mjybaidu.gear.host
$_SERVER['HTTP_X_SITE_DEPLOYMENT_ID']	mjybaidu
$_SERVER['HTTP_DISGUISED_HOST']	tb.majianyu.eu.org
$_SERVER['HTTP_X_ARR_LOG_ID']	baca26b7-a6ea-4ebf-ac07-526bcc15d10f
$_SERVER['HTTP_X_ORIGINAL_URL']	/index.php?plugin=wmzz_debug
$_SERVER['HTTP_X_LIVEUPGRADE']	1
$_SERVER['HTTP_CDN_LOOP']	cloudflare
$_SERVER['HTTP_CF_CONNECTING_IP']	2408:8214:3710:9be0:14b1:b319:14db:2e64
$_SERVER['HTTP_CF_REQUEST_ID']	074056fb9b0000052cc422e000000001
$_SERVER['HTTP_SEC_FETCH_DEST']	document
$_SERVER['HTTP_SEC_FETCH_USER']	?1
$_SERVER['HTTP_SEC_FETCH_MODE']	navigate
$_SERVER['HTTP_SEC_FETCH_SITE']	same-origin
$_SERVER['HTTP_UPGRADE_INSECURE_REQUESTS']	1
$_SERVER['HTTP_CF_VISITOR']	{"scheme":"https"}
$_SERVER['HTTP_X_FORWARDED_PROTO']	https
$_SERVER['HTTP_CF_RAY']	607a5aa5cd65052c-LAX
$_SERVER['HTTP_X_FORWARDED_FOR']	2408:8214:3710:9be0:14b1:b319:14db:2e64, 172.69.35.168:11088
$_SERVER['HTTP_CF_IPCOUNTRY']	CN
$_SERVER['HTTP_USER_AGENT']	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36
$_SERVER['HTTP_REFERER']	https://tb.majianyu.eu.org/index.php
$_SERVER['HTTP_MAX_FORWARDS']	10
$_SERVER['HTTP_HOST']	tb.majianyu.eu.org
$_SERVER['HTTP_COOKIE']	__cfduid=d2507c23602454d2cf3232f20c2371aa31607090867; ARRAffinity=849c5df8e963791e1852d1cd5623c2c79f2941b3a7f885dd52b8838be4f767b7; ARRAffinity=55fa8de92414fc6f9182090a6b12abde4a11c0e8ad8d30e1ed5834a0eb4049d6; PHPSESSID=2eb5e965360b7f05cd45cc7e837bcefa; uid=1; pwd=581363dc8a1c50f67b13258669b91bbb
$_SERVER['HTTP_ACCEPT_LANGUAGE']	zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
$_SERVER['HTTP_ACCEPT_ENCODING']	gzip
$_SERVER['HTTP_ACCEPT']	text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
$_SERVER['HTTP_CONNECTION']	Keep-Alive
$_SERVER['FCGI_ROLE']	RESPONDER
$_SERVER['PHP_SELF']	/index.php
$_SERVER['REQUEST_TIME_FLOAT']	1608981013.1932
$_SERVER['REQUEST_TIME']	1608981013
PHP Credits
PHP Group
Thies C. Arntzen, Stig Bakken, Shane Caraveo, Andi Gutmans, Rasmus Lerdorf, Sam Ruby, Sascha Schumann, Zeev Suraski, Jim Winstead, Andrei Zmievski
Language Design & Concept
Andi Gutmans, Rasmus Lerdorf, Zeev Suraski, Marcus Boerger
PHP Authors
Contribution	Authors
Zend Scripting Language Engine	Andi Gutmans, Zeev Suraski, Stanislav Malyshev, Marcus Boerger, Dmitry Stogov, Xinchen Hui, Nikita Popov
Extension Module API	Andi Gutmans, Zeev Suraski, Andrei Zmievski
UNIX Build and Modularization	Stig Bakken, Sascha Schumann, Jani Taskinen
Windows Support	Shane Caraveo, Zeev Suraski, Wez Furlong, Pierre-Alain Joye, Anatol Belski, Kalle Sommer Nielsen
Server API (SAPI) Abstraction Layer	Andi Gutmans, Shane Caraveo, Zeev Suraski
Streams Abstraction Layer	Wez Furlong, Sara Golemon
PHP Data Objects Layer	Wez Furlong, Marcus Boerger, Sterling Hughes, George Schlossnagle, Ilia Alshanetsky
Output Handler	Zeev Suraski, Thies C. Arntzen, Marcus Boerger, Michael Wallner
Consistent 64 bit support	Anthony Ferrara, Anatol Belski
SAPI Modules
Contribution	Authors
Apache 2.0 Handler	Ian Holsman, Justin Erenkrantz (based on Apache 2.0 Filter code)
CGI / FastCGI	Rasmus Lerdorf, Stig Bakken, Shane Caraveo, Dmitry Stogov
CLI	Edin Kadribasic, Marcus Boerger, Johannes Schlueter, Moriyoshi Koizumi, Xinchen Hui
Embed	Edin Kadribasic
FastCGI Process Manager	Andrei Nigmatulin, dreamcat4, Antony Dovgal, Jerome Loyet
litespeed	George Wang
phpdbg	Felipe Pena, Joe Watkins, Bob Weinand
Module Authors
Module	Authors
BC Math	Andi Gutmans
Bzip2	Sterling Hughes
Calendar	Shane Caraveo, Colin Viebrock, Hartmut Holzgraefe, Wez Furlong
COM and .Net	Wez Furlong
ctype	Hartmut Holzgraefe
cURL	Sterling Hughes
Date/Time Support	Derick Rethans
DB-LIB (MS SQL, Sybase)	Wez Furlong, Frank M. Kromann
DBA	Sascha Schumann, Marcus Boerger
DOM	Christian Stocker, Rob Richards, Marcus Boerger
enchant	Pierre-Alain Joye, Ilia Alshanetsky
EXIF	Rasmus Lerdorf, Marcus Boerger
fileinfo	Ilia Alshanetsky, Pierre Alain Joye, Scott MacVicar, Derick Rethans
Firebird driver for PDO	Ard Biesheuvel
FTP	Stefan Esser, Andrew Skalski
GD imaging	Rasmus Lerdorf, Stig Bakken, Jim Winstead, Jouni Ahto, Ilia Alshanetsky, Pierre-Alain Joye, Marcus Boerger
GetText	Alex Plotnick
GNU GMP support	Stanislav Malyshev
Iconv	Rui Hirokawa, Stig Bakken, Moriyoshi Koizumi
IMAP	Rex Logan, Mark Musone, Brian Wang, Kaj-Michael Lang, Antoni Pamies Olive, Rasmus Lerdorf, Andrew Skalski, Chuck Hagenbuch, Daniel R Kalowsky
Input Filter	Rasmus Lerdorf, Derick Rethans, Pierre-Alain Joye, Ilia Alshanetsky
InterBase	Jouni Ahto, Andrew Avdeev, Ard Biesheuvel
Internationalization	Ed Batutis, Vladimir Iordanov, Dmitry Lakhtyuk, Stanislav Malyshev, Vadim Savchuk, Kirti Velankar
JSON	Jakub Zelenka, Omar Kilani, Scott MacVicar
LDAP	Amitay Isaacs, Eric Warnke, Rasmus Lerdorf, Gerrit Thomson, Stig Venaas
LIBXML	Christian Stocker, Rob Richards, Marcus Boerger, Wez Furlong, Shane Caraveo
mcrypt	Sascha Schumann, Derick Rethans
Multibyte String Functions	Tsukada Takuya, Rui Hirokawa
MySQL driver for PDO	George Schlossnagle, Wez Furlong, Ilia Alshanetsky, Johannes Schlueter
MySQLi	Zak Greant, Georg Richter, Andrey Hristov, Ulf Wendel
MySQLnd	Andrey Hristov, Ulf Wendel, Georg Richter, Johannes Schlüter
OCI8	Stig Bakken, Thies C. Arntzen, Andy Sautins, David Benson, Maxim Maletsky, Harald Radi, Antony Dovgal, Andi Gutmans, Wez Furlong, Christopher Jones, Oracle Corporation
ODBC driver for PDO	Wez Furlong
ODBC	Stig Bakken, Andreas Karajannis, Frank M. Kromann, Daniel R. Kalowsky
Opcache	Andi Gutmans, Zeev Suraski, Stanislav Malyshev, Dmitry Stogov, Xinchen Hui
OpenSSL	Stig Venaas, Wez Furlong, Sascha Kettler, Scott MacVicar
Oracle (OCI) driver for PDO	Wez Furlong
pcntl	Jason Greene, Arnaud Le Blanc
Perl Compatible Regexps	Andrei Zmievski
PHP Archive	Gregory Beaver, Marcus Boerger
PHP Data Objects	Wez Furlong, Marcus Boerger, Sterling Hughes, George Schlossnagle, Ilia Alshanetsky
PHP hash	Sara Golemon, Rasmus Lerdorf, Stefan Esser, Michael Wallner, Scott MacVicar
Posix	Kristian Koehntopp
PostgreSQL driver for PDO	Edin Kadribasic, Ilia Alshanetsky
PostgreSQL	Jouni Ahto, Zeev Suraski, Yasuo Ohgaki, Chris Kings-Lynne
Pspell	Vlad Krupin
Readline	Thies C. Arntzen
Recode	Kristian Koehntopp
Reflection	Marcus Boerger, Timm Friebe, George Schlossnagle, Andrei Zmievski, Johannes Schlueter
Sessions	Sascha Schumann, Andrei Zmievski
Shared Memory Operations	Slava Poliakov, Ilia Alshanetsky
SimpleXML	Sterling Hughes, Marcus Boerger, Rob Richards
SNMP	Rasmus Lerdorf, Harrie Hazewinkel, Mike Jackson, Steven Lawrance, Johann Hanne, Boris Lytochkin
SOAP	Brad Lafountain, Shane Caraveo, Dmitry Stogov
Sockets	Chris Vandomelen, Sterling Hughes, Daniel Beulshausen, Jason Greene
SPL	Marcus Boerger, Etienne Kneuss
SQLite 3.x driver for PDO	Wez Furlong
SQLite3	Scott MacVicar, Ilia Alshanetsky, Brad Dewar
System V Message based IPC	Wez Furlong
System V Semaphores	Tom May
System V Shared Memory	Christian Cartus
tidy	John Coggeshall, Ilia Alshanetsky
tokenizer	Andrei Zmievski, Johannes Schlueter
WDDX	Andrei Zmievski
XML	Stig Bakken, Thies C. Arntzen, Sterling Hughes
XMLReader	Rob Richards
xmlrpc	Dan Libby
XMLWriter	Rob Richards, Pierre-Alain Joye
XSL	Christian Stocker, Rob Richards
Zip	Pierre-Alain Joye, Remi Collet
Zlib	Rasmus Lerdorf, Stefan Roehrich, Zeev Suraski, Jade Nicoletti, Michael Wallner
PHP Documentation
Authors	Mehdi Achour, Friedhelm Betz, Antony Dovgal, Nuno Lopes, Hannes Magnusson, Philip Olson, Georg Richter, Damien Seguy, Jakub Vrana, Adam Harvey
Editor	Peter Cowburn
User Note Maintainers	Daniel P. Brown, Thiago Henrique Pojda
Other Contributors	Previously active authors, editors and other contributors are listed in the manual.
PHP Quality Assurance Team
Ilia Alshanetsky, Joerg Behrens, Antony Dovgal, Stefan Esser, Moriyoshi Koizumi, Magnus Maatta, Sebastian Nohn, Derick Rethans, Melvyn Sopacua, Jani Taskinen, Pierre-Alain Joye, Dmitry Stogov, Felipe Pena, David Soria Parra, Stanislav Malyshev, Julien Pauli, Stephen Zarkos, Anatol Belski, Remi Collet, Ferenc Kovacs
Websites and Infrastructure team
PHP Websites Team	Rasmus Lerdorf, Hannes Magnusson, Philip Olson, Lukas Kahwe Smith, Pierre-Alain Joye, Kalle Sommer Nielsen, Peter Cowburn, Adam Harvey, Ferenc Kovacs, Levi Morrison
Event Maintainers	Damien Seguy, Daniel P. Brown
Network Infrastructure	Daniel P. Brown
Windows Infrastructure	Alex Schoenmaker
PHP License
This program is free software; you can redistribute it and/or modify it under the terms of the PHP License as published by the PHP Group and included in the distribution in the file: LICENSE

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

If you did not receive a copy of the PHP license, or have any questions about PHP licensing, please contact license@php.net.
```

## 最后 ##

这个空间还是很稳定的，100M，可以放点小程序，但是像WordPress就算了，三天两头会超100M，超了100M不会封号，但是会禁止访问，允许FTP，文件小于100M时便可以正常访问。

更多信息请访问官方文档：
[link](https://www.gearhost.com/documentation)
