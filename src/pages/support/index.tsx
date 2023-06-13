import { NextPage } from "next";
import Link from 'next/link';
import { Alert, AlertTitle, Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material";
import useSWR from "swr";
import { supportFetcher, Product } from "@services/support";



const SupportProject: NextPage = () => {
    const { data, error } = useSWR<Product[]>('/products', supportFetcher);

    return <Container className="page">
        <h1>Productos</h1>

        {data?.map(product => (
            <Card key={product.id} style={{ marginTop: "1em" }}>
                <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                </CardContent>
                <CardActions>
                    {product.versions.map(version => (
                        <Link key={version.id} href={`/support/${version.id}/tickets`}>
                            <Button>{version.name}</Button>
                        </Link>
                    ))}
                </CardActions>
            </Card>
        ))}

    </Container>
}

export default SupportProject;
