/// <reference types="Cypress" />
const dataJson = require('../../fixtures/Add_ManagingStaff.json')
let accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDMjk0NEE3MjZCRjQ1NEJCQzc4NENFNTc1MTlCMEMyRjI1OUNBMkQiLCJ4NXQiOiIzQ2xFcHlhX1JVdThlRXpsZFJtd3d2Slp5aTAiLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJmZTNhYTdiZC0yZjdiLTQ1MWEtOWFhOC03M2Q4NmQ5ZTg0N2YiLCJuYW1lIjoiYWRtaW5AaG1zZGVtby5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBobXNkZW1vLmNvbSIsInJvbGUiOiJBZG1pbiIsIm9pX3Byc3QiOiJtdmMiLCJjbGllbnRfaWQiOiJtdmMiLCJvaV90a25faWQiOiJhNjE5MTM3NS1lODUxLTQ0N2ItOGI0ZC0zODU4MWM0N2I4MzMiLCJhdWQiOiJtdmMiLCJleHAiOjE2NDIyNDQ5ODEsImlzcyI6Imh0dHA6Ly8xNzMuMjQ4LjE1OC4xNTIvSE1TLlRlc3RpbmciLCJpYXQiOjE2NDIyNDEzODF9.fMf5l3gFXy4oYfbnHI6ZCVL4fVW-T1CawC16E_qX7Atu3zkWsSYKNSQtd-4EbbCl9qrGVVx4C5khqVoWWEps-W10QnhQbbLqRbevvHL-9oojCbdDH1RWeRpo95veEi7VkAtKLPzz5rtKsM3Jugp71j-XuoNscwXYBvOWGLuP6fW9pZH6Oxv5f1D15YTSzGVzMtXNEB8QNUBfR3-BYnigCdACwJ1ayIBzgxahp2K4yqn-0TrwijLhqsrJp0UF6kRLcTAkGgJ6fSFYM6pCywkLqJLz5_RbElvcVp-_IDkd4H210kO8VpVCBjAPlLIqubgTswUUJr06r3y0I2j72t_MMs6rqYmaJGNcx7rxjijOcxPQDXOQP5Wm93mzNHSyME2YWDUeOC5lqnbvOzql0TVDJi1PuddESQHWCmKsJv37qpIC0r-f8NPMU90EjXz0OWKqV1tSzzv3PRd3X3vmkM0JMBpfo4rnQ9P-BHRaV579Oi9g-s6GjYI776RE-fUeFEkzn0-xpOkhDMaG5pifltCAqrPBqnObDttjzaMRk08n35Z1NLKMln-SamMD7jkow5YXozQEUYj4ngxTdUGwOfYd3G5XuY-Vpv-A9ZPWWud3t1gkXCpEgOYxtQpSqquarJ8XgU6_fzE-mNOGVszkx4e0wFcv9vTlwm9L-8VOLx77rYU'
describe('post user request', () => {

    it.only('Add ManageingStaff test', () => {
        

        cy.fixture('Add_ManagingStaff.json').then((payload) =>{            
           
            cy.request({
                method: 'POST',
                url: '/UserManagement/managingStaff',

                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                
                body: {
                    "staffID": payload.staffID,
                    "staffFirstName": payload.staffFirstName,
                    "staffLastName": payload.staffLastName,
                    "staffDirectPhoneNo": payload.staffDirectPhoneNo,
                    "staffDirectEmailId": payload.staffDirectEmailId,
                    "providerId": payload.providerId,
                    "practiceId": payload.practiceId,
                    "providerFirstName": payload.providerFirstName,
                    "providerLastName": payload.providerLastName,
                    "providerDirectEmail": payload.providerDirectEmail,
                    "providerDirectPhoneNo": payload.providerDirectPhoneNo,
                    "phoneNumber": payload.phoneNumber,
                    "emailId": payload.emailId
             }
   
                }).then((res)=>{
                    cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(200)
                    expect(res.body).has.property('hasError');
                    expect(res.body.hasError).to.eq(false);
                    expect(res.body).has.property('entityData'); 
                    expect(res.body.entityData.staffFirstName).to.eq('Loyed');
                    expect(res.body).has.property('responseMessage');
                    expect(res.body.responseMessage).to.eq(null);
            })           
        
        })
    })
})