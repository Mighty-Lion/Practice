import express, { Router, Request, Response } from 'express';
import serverless from 'serverless-http';
import { get } from 'lodash';
import querystring from 'querystring';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import cors from 'cors';

const api = express();

const router = Router();
// router.get('/', (req, res) => {
//   res.json({
//     path: 'Home',
//     firstName: 'Aslan',
//     lastName: 'Abaev',
//   });
// });

router.get('/json', (req, res) => {
  res.json({
    path: 'json',
    author: 'Aslan Abaev',
  });
});

router.use(cookieParser());

const GITHUB_CLIENT_ID = '6551a3dcf40761866249';
const GITHUB_CLIENT_SECRET = 'ff0c5c2cdd0bf0565a714ef04af272c7dc95ee76';
const secret = 'shhhhhhhhhhhh';
const COOKIE_NAME = 'github-jwt';

router.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

export interface IGitHubUserProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: null;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

async function getGitHubUser({
  code,
}: {
  code: string;
}): Promise<IGitHubUserProps> {
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)

    .catch((error) => {
      throw error;
    });

  const decoded = querystring.parse(githubToken);

  const accessToken = decoded.access_token;

  return axios
    .get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error getting user from GitHub`);
      throw error;
    });
}

router.get('/github', async (req: Request, res: Response) => {
  const code = get(req, 'query.code' as string);
  const path = get(req, 'query.path', '/');

  if (!code) {
    throw new Error('No code!');
  }

  const gitHubUser = await getGitHubUser({ code });

  const token = jwt.sign(gitHubUser, secret);

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    domain: 'localhost',
  });

  res.redirect(`http://localhost:8888${path}`);
});

router.get('/me', (req: Request, res: Response) => {
  const cookie = get(req, `cookies[${COOKIE_NAME}]`);

  try {
    const decode = jwt.verify(cookie, secret);

    return res.send(decode);
  } catch (e) {
    return res.send(null);
  }
});

api.use('/.netlify/functions/api', router);

module.exports.handler = serverless(api);