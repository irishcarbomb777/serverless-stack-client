const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "lannans-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://e4ah2glpq5.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_aHP1ZtDnq",
      APP_CLIENT_ID: "5mj37o0ngemm2ou3rmec9s4fgs",
      IDENTITY_POOL_ID: "us-east-1:900847e0-220d-459c-b168-7b888c920559",
    },
  };
  
  export default config;