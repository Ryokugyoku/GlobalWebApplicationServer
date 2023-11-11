#!/bin/sh
dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
dnf -qy module disable postgresql
dnf install -y postgresql14-server
systemctl enable postgresql-14
systemctl start postgresql-14
PGSETUP_INITDB_OPTIONS='--encoding=UTF-8 --no-locale' /usr/pgsql-14/bin/postgresql-14-setup initdb
su - postgres
psql
CREATE ROLE aspuser WITH
  SUPERUSER
  CREATEDB
  CREATEROLE
  INHERIT
  LOGIN
  REPLICATION
  BYPASSRLS
  ENCRYPTED PASSWORD 'root';
\q
mkdir /var/lib/pgsql/14/data/App_tbs
psql
CREATE TABLESPACE spring_tbs
  OWNER aspuser
  LOCATION '/var/lib/pgsql/14/data/App_tbs';
COMMENT ON TABLESPACE spring_tbs IS 'メインアプリケーション用テーブルスペース';
GRANT CREATE ON TABLESPACE spring_tbs TO aspuser;

CREATE DATABASE RootApplicationDb
    WITH 
    OWNER = aspuser
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = spring_tbs
    ALLOW_CONNECTIONS = true
    CONNECTION LIMIT = 5;
COMMENT ON DATABASE RootApplicationDb IS 'メインアプリケーション用DB';
