import {  useState, FormEvent } from 'react';
import { deleteColorModeInLocalStorage } from '@/ui/theme';
import {
  Input,
  Stack,
  Button,
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { useMutateAuth } from '@/hooks/query/useMutateAuth';
import { CheckIcon, SettingsIcon, WarningIcon } from '@chakra-ui/icons';

const Home: NextPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  } = useMutateAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate();
    } else {
      registerMutation.mutate();
    }
  };
  // After 3s reset the localStorage
  // useEffect(() => {
  //   setTimeout(deleteColorModeInLocalStorage, 3000);
  // }, []);
  // const [taskList, setTaskList] = useState([]);

  return (
    <Layout>
      <Card variant="outline">
        <CardHeader>
          <Heading textAlign="center" size="md">
            {isLogin ? 'Login Form' : 'Signup Form'}
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input
                placeholder="Emailを入力"
                w="300px"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="Passwordを入力"
                w="300px"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <Text
                cursor="pointer"
                textAlign="center"
                onClick={() => {
                  setIsLogin((prev) => !prev);
                }}
              >
                <SettingsIcon mr={2} />
                change mode ?
              </Text>
              <Button isLoading={false} type="submit">
                <CheckIcon mr={2} />
                {isLogin ? 'Login' : 'SignUp'}
              </Button>
            </Stack>
          </form>
        </CardBody>
        <CardFooter>
          <WarningIcon mr={1} color="red.300" />
          <Text maxW="300px" fontSize="xs" textAlign="center">
            Emailの確認オプションをオフにしています。
            <br />
            そのためダミーメールでサインインできます。
          </Text>
        </CardFooter>
      </Card>
    </Layout>
  );
};

export default Home;
