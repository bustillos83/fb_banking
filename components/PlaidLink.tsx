import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions } from 'react-plaid-link'
import { StyledString } from 'next/dist/build/swc';
import { useRouter } from 'next/navigation';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');

    useEffect(() =>{
        const getLinkToken = async () =>{
            // const dara = await createLinkToken(user);

            // setToken(data?.linkToken);
        }

        getLinkToken()
    },[])

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    //   await exchangePublicToken({
    //     publicToken: publick_token,
    //     user
    //   }) 

        router.push('/')
    },[user])

    const config: PlaidLinkOptions ={
        token,
        onSuccess
    }
  return (
    <>
    {variant === 'primary' ? (
        <Button
        className='plaidlink-primary'>
            Connect bank
        </Button>
    ): variant === 'ghost' ?(
        <Button>
            Connect bank
        </Button>
    ): (
        <Button>
            Connect bank
        </Button>
        )}
    </>
  )
}

export default PlaidLink