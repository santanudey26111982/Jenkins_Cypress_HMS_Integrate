/// <reference types="Cypress" />
const dataJson = require('../../fixtures/ManagingStaffProfile.json')
let accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDMjk0NEE3MjZCRjQ1NEJCQzc4NENFNTc1MTlCMEMyRjI1OUNBMkQiLCJ4NXQiOiIzQ2xFcHlhX1JVdThlRXpsZFJtd3d2Slp5aTAiLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJmZTNhYTdiZC0yZjdiLTQ1MWEtOWFhOC03M2Q4NmQ5ZTg0N2YiLCJuYW1lIjoiYWRtaW5AaG1zZGVtby5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBobXNkZW1vLmNvbSIsInJvbGUiOiJBZG1pbiIsIm9pX3Byc3QiOiJtdmMiLCJjbGllbnRfaWQiOiJtdmMiLCJvaV90a25faWQiOiJiZGExNWFjYi1jMGExLTRmZjUtOGU1Zi1iODQ1N2VhMWM5N2MiLCJhdWQiOiJtdmMiLCJleHAiOjE2NDIyMzY4NjIsImlzcyI6Imh0dHA6Ly8xNzMuMjQ4LjE1OC4xNTIvSE1TLlRlc3RpbmciLCJpYXQiOjE2NDIyMzMyNjJ9.RSOErmH7yoG77iheXJJhAUSfJwrGs3wZlLR7h8WqWdF6WT8U_k52d7I-TKMVZbJwO9D8K7Z-S1-EN4N5AgeKViOSbdYgl_Xj7qlpnGypr2zvgknf3OP2XTyvJI9Eg4stswWgh0cUYUpY3PaMYGICN7_nUYTl5E6g9sOyObAB5zhxvD48rlNs0PvZJgzfSxVKktZMek8zIBE3WuD12O46UGqkgxdR_Uzo5QnPCv_uN0XykU0OaHZNntWCGi0fs7C_x_IEHp9VefYvWSQLTwgRLUZAyaxM9BSH10iBFlcnagyTUK4Idh8A3TbQBwMGfs8iDWBgfxI_A0Se4uanxQbORsZebMgflI8XnlAGOYk0gWFksZPOc7CC4GRt5aH4kFXLJbQaxoEKcKUS-friUwTVlH-YFA2L-nxuqnni6OusEsT_0STpcGRzC4dfcorWYoyq1P-z77fNv_Y7oooeLaQbbJEYa7xRlHjSBR2SoWKL1eBJ-6nnWyQmXL7O8K5ivHeLtWRms6Ry9r0NQSvUmN7VOxSriefG64CDtXM8CoJOpr1jWAh2PILn0h96b5ESfjSjB-ldAxG-6UY-eW03k3memtxAKBNuQerXdMC1vXxpwNoDMBsd0x0EjAVT6-wSONOpXUZXw48c8fPaoS7mC3eXBElbN6784aCiznvcr_ShJJo'
describe('Get Managing Staff Profile request', () => {

    it.only('Get Managing Staff Profile test', () => {
        

        cy.fixture('ManagingStaffProfile.json').then((payload) =>{            
           
            cy.request({
                method: 'GET',
                url: '/UserManagement/managingStaffProfile?ManagingStaffId=7952ab56-315e-477d-b27b-53605eee5a66',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                
                body: {
                    
                      }
                                
   
                }).then((res)=>{
                    cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(200)
                   // expect(res.body).has.property('hasError');
                  //  expect(res.body.hasError).to.eq(false);
                   // expect(res.body).has.property('entityData'); 
                   // expect(res.body.entityData.id).to.eq('0530cf41-6bf8-4b1d-85c5-a2d6880987c3');
                   // expect(res.body).has.property('responseMessage');
                  //  expect(res.body.responseMessage).to.eq(null);
            })           
        
        })
    })
    })