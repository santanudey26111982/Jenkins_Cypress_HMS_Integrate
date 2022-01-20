describe("Upload a File SUITE", () => {
    it("File Upload", () => {
      function form_request(method, url, formData, done) {
        const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDMjk0NEE3MjZCRjQ1NEJCQzc4NENFNTc1MTlCMEMyRjI1OUNBMkQiLCJ4NXQiOiIzQ2xFcHlhX1JVdThlRXpsZFJtd3d2Slp5aTAiLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJmZTNhYTdiZC0yZjdiLTQ1MWEtOWFhOC03M2Q4NmQ5ZTg0N2YiLCJuYW1lIjoiYWRtaW5AaG1zZGVtby5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBobXNkZW1vLmNvbSIsInJvbGUiOiJBZG1pbiIsIm9pX3Byc3QiOiJtdmMiLCJjbGllbnRfaWQiOiJtdmMiLCJvaV90a25faWQiOiIyMmMzYWZkNS0zNDc1LTRjYmYtYmNlMy1kMTU3Yzc2NzU5NDAiLCJhdWQiOiJtdmMiLCJleHAiOjE2NDIxODA1MzYsImlzcyI6Imh0dHA6Ly8xNzMuMjQ4LjE1OC4xNTIvSE1TLlRlc3RpbmciLCJpYXQiOjE2NDIxNzY5MzZ9.k2sJWTbxrYXHNvjJ28lpEZUFfi70lfsK0ziNinzhftuSU8pQjppBF3jvn7SIuYOZjLQcmrpiyd3zA1u7irSixAS0iYVUGEOCpJeo0KEiXNnZhMHzxXjF2GAW48VSr12Vy1QIQpxnk3xdbombW9-u3Fgze81bKirCba6hExXsmn9IWqHCwATvNA6UmK1E1aAXdCtx0J9nSLl1VhWv5ONvFC0ggbJDw9mvUkhoBfIZcfGPJnWxErT3YU3g7ucPU5pPF5clBF5LWgUezl3FdrC3O75XMAw_uv4RHf2_5ZjG--4yzCq_iDR9ITdOzOX4ac2dXzkMfcOt-8iFe5aL1pcHDEkyzda8yuaiW8owXsdureC3givYKNsfEmKlgLnWOhAjFMT7FTLnNdTawUSC6RPE8hR69WX0pO7hnE0O70ezC1FxsbMrb97Ue-BKAMUzke5XPpYSq7t_WlcekzHKw4rl3JaHpVVeRNqGSIUAL_QuDQmE2irL6sBfZgOsp0a2UDjWfcsWYB7WXkI2zT75nyDijeCwr9c4FRVuCzb-2XiUpj_2AEiJH8FrNw05XTGN1MjDi4mzrJBg9O572oWWQHpRcLWxUSMzjMGqMsIBp1RPV4lWE-eB24Issc6pY3aSDhJnxVkWzFyroHCmdJsU-diRR3H8Yre5CJaiUqwRtWUV-mM";
        const xhr = new XMLHttpRequest();

  
        xhr.open(method, url);
        
        xhr.setRequestHeader(
          "Authorization",
          "Bearer  " + accessToken
        );
  
        xhr.onload = function () {
          done(xhr);
        };
  
        xhr.onerror = function () {
          done(xhr);
        };
  
        xhr.send(formData);
      }
      
  
      const fileName = "ManagingStaff.csv";
      const method = "POST";
      const url = "http://173.248.158.152/HMS.Testing/api/Patients/bulkupload/ManagingStaff";
      const fileType = "text/csv";
  
      cy.fixture(fileName, "binary")
        .then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin))
        .then((blob) => {
          const formData = new FormData();
          formData.append("file", blob, fileName);
          form_request(method, url, formData, function (res) {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200);
            expect(JSON.parse(res.res).success).to.eq(true);
            expect(JSON.parse(res.res).responseMessage).to.eq(
              "File uploaded successfully!"
            );
          });
        });
    });
  });
  