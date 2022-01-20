/// <reference types="Cypress" />
const dataJson = require('../../fixtures/DeleteManagingStaff.json')
let accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDMjk0NEE3MjZCRjQ1NEJCQzc4NENFNTc1MTlCMEMyRjI1OUNBMkQiLCJ4NXQiOiIzQ2xFcHlhX1JVdThlRXpsZFJtd3d2Slp5aTAiLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJmZTNhYTdiZC0yZjdiLTQ1MWEtOWFhOC03M2Q4NmQ5ZTg0N2YiLCJuYW1lIjoiYWRtaW5AaG1zZGVtby5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBobXNkZW1vLmNvbSIsInJvbGUiOiJBZG1pbiIsIm9pX3Byc3QiOiJtdmMiLCJjbGllbnRfaWQiOiJtdmMiLCJvaV90a25faWQiOiJiZTYwMGE1My02NzI5LTQxMzUtYWMxMC1lZDc2Yjg1NWI0ZjMiLCJhdWQiOiJtdmMiLCJleHAiOjE2NDIxNzIwNTMsImlzcyI6Imh0dHA6Ly8xNzMuMjQ4LjE1OC4xNTIvSE1TLlRlc3RpbmciLCJpYXQiOjE2NDIxNjg0NTN9.cVxfJjG7IuXewxSdqs-bVJHqKV7nTwwYs9s64xCL6ywbEHEoL_8VaVx00nADWjSmARlfL4JqQXU_8fr0UDXCgDeioGCNcmaiMJdaL-Zt0VdH8coHAshCjrjuYenmfLv6xvHZ8mY7gt-rVbrMyizMMalSOzgUrkxwc1N18gcnRo05D8Rn2M4XMpR-Mc3_qdDkP9vCmz1bRqfft7m92c-2ywWjC_I8IlUPB72gfFUeCBhJ49WDqJbV-Zuxa71xmzL-m2wmWcEHgZOhI6pDhrEVy85bVrW-LyjaFb-g0lxriV001SAkQxOnmX3fy1LtkmtY5V30QncXmfxwoqd_kOWWEOQuqSKSD4ZBXkibwDj2RH3jt7_My9RquUhExhXanokZXPURiBJgIzxo50FwUMzA9hnIuSG-XB50Fh58iQIgMWvlT6HuR2Z7HzizDIwszUQKlb4q7bgUSzHfBdYi0y9R0YLKRL3GXbJMJy5EGsGasSjBom9tV0ayonfHY-683kznl0d7Us1rMgHghBGxLRsT6YNos-FTW7rdSQrnUwa6tgSlOuC-QM9gz01l188x3V097dV4TjW-4jr3suI-woAV7YEA4SWxgako4ikrPhs22A5dl6Q4Crcu3xRqMHMVWVOnhrHGiqnnYiAP4Pd0JaCC4W2HOlsZEQU_0vE4rvXCRP8'
describe('post user request', () => {

    it.only('Delete managingstaff test', () => {
        

        cy.fixture('DeleteManagingStaff.json').then((payload) =>{            
           
            cy.request({
                method: 'DELETE',
                url: 'http://173.248.158.152/HMS.Testing/api/UserManagement/deleteManagingStaff',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                
                body: {
                    
                        "staffId": payload.staffId
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