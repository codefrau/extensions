/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Config } from "./types";

const config: Config = {
  location: process.env.LOCATION,
  mailCollection: process.env.MAIL_COLLECTION,
  smtpConnectionUri: process.env.SMTP_CONNECTION_URI,
  smtpPassword: process.env.SMTP_PASSWORD,
  defaultFrom: process.env.DEFAULT_FROM,
  defaultReplyTo: process.env.DEFAULT_REPLY_TO,
  usersCollection: process.env.USERS_COLLECTION,
  templatesCollection: process.env.TEMPLATES_COLLECTION,
  testing: process.env.TESTING === "true",
  TTLExpireType: process.env.TTL_EXPIRE_TYPE,
  TTLExpireValue: parseInt(process.env.TTL_EXPIRE_VALUE),
};

export default config;
