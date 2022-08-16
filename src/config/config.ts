export const config = {
  dev: {
    username: process.env.POSTFRESS_USERNAME,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DATABASE,
    host: process.env.POSTGRESS_HOST,
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: process.env.AWS_BUCKET_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
