USE pagination;

CREATE TABLE job {
    id int NOT NULL,
    jobid int NULL,
    jovtitle nvarchar(50) NULL,
    jobdesc nvarchar(50) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (jobid) REFERENCES job(jobid),
},

CREATE TABLE employee {
    id int NOT NULL,
    empid int NULL,
    firstname nvarchar(50) NULL,
    lastname nvarchar(50) NULL,
    jobid int FOREIGN KEY REFERENCES job(jobid),
}