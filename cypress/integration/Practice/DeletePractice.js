/// <reference types="Cypress" />
const dataJson = require('../../fixtures/DeletePractice.json')
let accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDMjk0NEE3MjZCRjQ1NEJCQzc4NENFNTc1MTlCMEMyRjI1OUNBMkQiLCJ4NXQiOiIzQ2xFcHlhX1JVdThlRXpsZFJtd3d2Slp5aTAiLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJmZTNhYTdiZC0yZjdiLTQ1MWEtOWFhOC03M2Q4NmQ5ZTg0N2YiLCJuYW1lIjoiYWRtaW5AaG1zZGVtby5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBobXNkZW1vLmNvbSIsInJvbGUiOiJBZG1pbiIsIm9pX3Byc3QiOiJtdmMiLCJjbGllbnRfaWQiOiJtdmMiLCJvaV90a25faWQiOiI4YzZhZWJhZi1iMDk1LTQ5YTgtOTJlOC1iNDM1NzY0OTUyMmMiLCJhdWQiOiJtdmMiLCJleHAiOjE2NDIxNTk1MDUsImlzcyI6Imh0dHA6Ly8xNzMuMjQ4LjE1OC4xNTIvSE1TLlRlc3RpbmciLCJpYXQiOjE2NDIxNTU5MDV9.EGRkle-UXLrDmMKDshmUYlMCGIWrw6YAk19Ljsvf1EdwWd6t1Dtr-jWwYSWKrwD2EHyNNrCIII2Q07tes2slfkISsvsap54Pkibx0uC9XPeSt-kM67RTx8y1S3Y0inO7MSZtc1kIXfl916mPKRLYBgTMLMSX9rSfGIAnKecyPAkR78lPneNIMnMnfSMUxm96yIDJ323h4ug8rfHYgl4xQbNsRupBjrKMNth67IFCSeF0AYc8ATltXIXUu6Uj1r2rP3k1vl2nof3B1qlMzUetuRcqVDP71m2EFS0SjdcTd5IM8yF0KyNImoY6oKbyybgRHX6alrGqbMeirHV2om9_YnnkYwEEUDJORCct5xCV2sA1V0MXH2E3B0W2aY8mctAIE-SV73dtLyhwottgqzfTNp_pDHESXXyVw6aaOQ5eWu6Oe_P66BN9iNcJdvxOLoid7oG643SLIhR44tSQhcIVgaUqNxdGWLieUoYjvzJwNjk5ItBBzUXzBhLwZvq9RwG_O5x_PFFmo6J4YTzrYtiQAeMt3tTijCHmXvbSW_vsWj3sQYykmvlim-y77XuXnpkkFj8CSDa3EmBZfIaPoJN-Ot6TXgZfRd6lg4RFkzXMfEUQp1eW_jao7w3YhTwhGqKq1A3W48o70M7ASWkhMYJt3HXdNE1TJ-cAtwtooyKsSl8'
describe('delete practice request', () => {

    it.only('Delete Practice test', () => {
        

        cy.fixture('DeletePractice.json').then((payload) =>{            
           
            cy.request({
                method: 'DELETE',
                url: 'http://173.248.158.152/HMS.Testing/api/UserManagement/deletePractice',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                
                body: {
                    
                        "practiceId": payload.practiceId
                   }
                        

   
                }).then((res)=>{
                    cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(200)
                    //expect(res.body).has.property('hasError');
                   // expect(res.body.hasError).to.eq(false);
                   // expect(res.body).has.property('entityData'); 
                    //expect(res.body.entityData.staffId).to.eq('67776316-11a7-487c-ad71-cd1e7ab2eaad');
                    //expect(res.body).has.property('responseMessage');
                   // expect(res.body.responseMessage).to.eq(null);
            })           
        
        })
    })
    })