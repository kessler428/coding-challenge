import { useEffect, useState } from "react";

export const useFetch = () => {
    const [data, setData] = useState([])

    const [accounts, setAccounts] = useState('')
    const [assets, setAssets] = useState('')
    const [customers, setCustomers] = useState('')
    const [datapoints, setDatapoints] = useState('')
    const [devices, setDevices] = useState('')
    const [documents, setDocuments] = useState('')
    const [forms, setForms] = useState('')
    const [invites, setInvites] = useState('')
    const [media, setMedia] = useState('')
    const [messages, setMessages] = useState('')
    const [namespaces, setNamespaces] = useState('')
    const [orders, setOrders] = useState('')
    const [patients, setPatients] = useState('')
    const [relationships, setRelationships] = useState('')
    const [rules, setRules] = useState('')
    const [templates, setTemplates] = useState('')
    const [users, setUsers] = useState('')
    const [workflows, setWorkflows] = useState('')

    useEffect(() => {
        fetch(`https://api.factoryfour.com/accounts/health/status`)
            .then((response) => response.json())
            .then((data) => setAccounts(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/assets/health/status`)
            .then((response) => response.json())
            .then((data) => setAssets(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/customers/health/status`)
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/datapoints/health/status`)
            .then((response) => response.json())
            .then((data) => setDatapoints(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/devices/health/status`)
            .then((response) => response.json())
            .then((data) => setDevices(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/documents/health/status`)
            .then((response) => response.json())
            .then((data) => setDocuments(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/forms/health/status`)
            .then((response) => response.json())
            .then((data) => setForms(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/invites/health/status`)
            .then((response) => response.json())
            .then((data) => setInvites(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/media/health/status`)
            .then((response) => response.json())
            .then((data) => setMedia(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/messages/health/status`)
            .then((response) => response.json())
            .then((data) => setMessages(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/namespaces/health/status`)
            .then((response) => response.json())
            .then((data) => setNamespaces(data))
            .catch((err) => err);

        fetch(`https://api.factoryfour.com/orders/health/status`)
            .then((response) => response.json())
            .then((data) => setOrders(data))
            
        fetch(`https://api.factoryfour.com/patients/health/status`)
            .then((response) => response.json())
            .then((data) => setPatients(data))
            
        fetch(`https://api.factoryfour.com/relationships/health/status`)
            .then((response) => response.json())
            .then((data) => setRelationships(data))
            
        fetch(`https://api.factoryfour.com/rules/health/status`)
            .then((response) => response.json())
            .then((data) => setRules(data))
            
        fetch(`https://api.factoryfour.com/templates/health/status`)
            .then((response) => response.json())
            .then((data) => setTemplates(data))
            
        fetch(`https://api.factoryfour.com/users/health/status`)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            
        fetch(`https://api.factoryfour.com/workflows/health/status`)
            .then((response) => response.json())
            .then((data) => setWorkflows(data))
            
    }, [])

    useEffect(() => {
        setData([
            accounts, 
            assets, 
            customers,
            datapoints,
            devices,
            documents,
            invites,
            forms,
            messages,
            media,
            namespaces,
            orders,
            patients,
            relationships,
            rules,
            templates,
            users,
            workflows,
        ])
    },[
        accounts, 
        assets, 
        customers,
        datapoints,
        devices,
        documents,
        invites,
        forms,
        messages,
        media,
        namespaces,
        orders,
        patients,
        relationships,
        rules,
        templates,
        users,
        workflows,
    ])

    useEffect(() => {
        setTimeout(() => {
            setData(data)
        }, 15000);
    },[data])

    return [
        data
    ]
}
