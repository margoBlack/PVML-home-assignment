import {faker} from '@faker-js/faker';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MAX_LENGHT = 100; // you can try to change to bigger amount to see loader

function createRandomUser() {
    return {
        id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sexType()
    };
  }
  
function getUsers() {
    const length = Math.floor(Math.random() * MAX_LENGHT);

    const users = Array.from({length}).map(item => createRandomUser());
    const columnNames = ['id', 'avatar', 'email', 'firstName', 'lastName', 'sex']
    return [columnNames, ...users] as any[];
}


function transformResponse(res: any[]) {
const [columnNames, ...dataSource] = res;

const columns = columnNames.map((column: string) => ({
        title: column,
        dataIndex: column
    }))

    return {
        columns,
        dataSource
    }
}
  
async function getFromApi(source: string, sql: string, apiUrl: string) {
    try {
        const res = await fetch('https://' + apiUrl, {
            method: 'POST',
            body: JSON.stringify({
                source,
                sql
            })
        })
        return res.json();
    } catch (err: any) {
        toast.error(err.message as string);
        return [[]];
    }
}

async function getMockedData() {
    return await getUsers();
}
  
export async function executeQuery(source: string, sql: string, apiUrl='') {
    const data = apiUrl.length > 0 ? await getFromApi(source, sql, apiUrl) : await getMockedData() ;

    return transformResponse(data);
}